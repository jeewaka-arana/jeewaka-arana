import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { CrudService } from 'app/core/crud.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
// import { validateConfig } from '@angular/router/src/config';
import { Doctor } from 'app/core/models/doctor.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Disease } from '../../core/models/diseases.module';
import { of } from 'rxjs';
import * as Rellax from 'rellax';

export interface Doctors {
  Firstname: string,
  Lastname: string,
  Email: string,
  No:string;
   Lane1:string;
   Lane2:string;
   note:string;
}


@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class DoctoradminpageComponent implements OnInit {



  orders = [];
  Citys: any = ['Colombo', 'Dehiwala-Mount Lavinia', 'Moratuwa', 'Jaffna', 'Negombo', 'Pita Kotte', ' Sri Jayewardenepura Kotte', 'Kandy', 'Trincomalee', 'Kalmunai', 'Galle', 'Point Pedro', 'Batticaloa', 'Katunayaka', 'Valvedditturai'
    , 'Matara', 'Battaramulla South', 'Dambulla', 'Maharagama', 'Kotikawatta', 'Anuradhapura', 'Vavuniya', 'Kolonnawa', 'Hendala', 'Ratnapura', 'Badulla'
    , 'Puttalam', 'Devinuwara', 'Welisara', 'Kalutara', 'Bentota', 'Matale', 'Homagama', 'Beruwala', 'Panadura', 'Mulleriyawa', 'Kandana', 'Ja Ela', 'Wattala'
    , 'Peliyagoda', 'Kelaniya', 'Kurunegala', 'Nuwara Eliya', 'Gampola', 'Chilaw', 'Eravur Town', 'Hanwella Ihala', 'Weligama', 'Vakarai', 'Kataragama'
    , 'Ambalangoda', 'Ampara', 'Kegalle', 'Hatton', 'Polonnaruwa', 'Kilinochchi', 'Tangalle', 'Monaragala', 'Wellawaya', 'Gampaha', 'Horana South'
    , 'Wattegama', 'Minuwangoda', 'Horawala Junction', 'Kuliyapitiya'];

  Specialists: any = ['Ayurvedic Hospital', 'Arthritis', 'Beauty Spa', 'cancer', 'Chronic Ulcers', 'Cholestrol', 'Diabetic Ulcers', 'Diabetes Mellitus', 'ENT'
    , 'Fistula', 'Gynaecological Disorders', 'Gastritis', 'Hemorrhoids', 'Hypertension', 'Neurological Disorders', 'Orthopedics'
    , 'Obesity', 'Paralysis / Hemiplagia', 'Pediatrics', 'Spinal Disorders', 'Skin Disorders', 'Urinary Calculi', 'Urinary Calculi', 'Urinary Disease'
    , 'Varicose Venis', 'I have a medical hospital for all diseases'

  ];

  postsCol: AngularFirestoreCollection<Doctors>;
  posts: Observable<Doctors[]>;
  post: any;
  newDoctor: Doctor;



  formdoc: FormGroup;


  formdata = new FormGroup({
    profilepicurl: new FormControl(''),
    Specialist: new FormControl(''),
    NIC: new FormControl(''),
    Firstname: new FormControl(''),
    Lastname: new FormControl(''),
    City: new FormControl(''),
    PhoneNumber: new FormControl(''),
    ExpYears: new FormControl(''),

    dateTime: new FormControl(''),
    
    img: new FormControl(''),
    img1: new FormControl(''),
    img2: new FormControl(''),

    img3: new FormControl(''),

    video: new FormControl(''),


    cname: new FormControl(''),
    cmail: new FormControl(''),
    cmsg: new FormControl(''),

    // mt1: new FormControl(''),
    // mt2: new FormControl(''),
    // mt3: new FormControl(''),

    // tt1: new FormControl(''),
    // tt2: new FormControl(''),
    // tt3: new FormControl(''),

    // wt1: new FormControl(''),
    // wt2: new FormControl(''),
    // wt3: new FormControl(''),


    // tht1: new FormControl(''),
    // tht2: new FormControl(''),
    // tht3: new FormControl(''),

    // ft1: new FormControl(''),
    // ft2: new FormControl(''),
    // ft3: new FormControl(''),

    // st1: new FormControl(''),
    // st2: new FormControl(''),
    // st3: new FormControl(''),



    // sut1: new FormControl(''),
    // sut2: new FormControl(''),
    // sut3: new FormControl(''),

    No:new FormControl(''),
   Lane1:new FormControl(''),
   Lane2:new FormControl(''),
  });

  formnote = new FormGroup({
    note: new FormControl(''),
  });
  form: FormGroup;
  disease: { id: string; name: string; }[];


  my_id: string;
  Firstname: string;
  Lastname: string;
  PhoneNumber:string;
  ExpYears:string;
  Specialist:string;
  No:string;
  Lane1:string;
  Lane2:string;
  note:string;
  constructor(private afs: AngularFirestore, private CrudService: CrudService, private AuthService: AuthService, private router: Router, private storage: AngularFireStorage, private afAuth: AngularFireAuth, private db: AngularFirestore, private fb: FormBuilder, private formBuilder: FormBuilder) {


    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(13);
     console.log(this.my_id);


    //
    this.form = this.formBuilder.group({
      diseases: ['']
    });

    this.afs.collection('Doctors').doc(this.my_id).valueChanges().subscribe(result => {
      this.post = result;
      
    //    this.Firstname = result["Firstname"];
    //  this.Lastname = result["Lastname"];


      this.formdata.patchValue({
        Firstname: result["Firstname"],
        Lastname: result["Lastname"],
        PhoneNumber:result["PhoneNumber"],
        ExpYears:result["ExpYears"],
        Specialist:result["Specialist"],
        City:result["City"],
        No:result["No"],
        Lane1:result["Lane1"],
        Lane2:result["Lane2"],
        
        

      });

      this.formnote.patchValue({
        note:result["note"],

      });

      // console.log(this.Firstname)
    });





  }

  ngOnInit() {
    //var rellaxHeader = new Rellax('.rellax-header');

    this.formdata;






  }

  
  saveform(data) {

    // this.CrudService.updateForm(data,this.my_id)
  }

savevalue(data){

this.afs.collection('Doctors').doc(this.my_id).update(data);
}
  // savevalue() {

  //   let data = this.formdata.value;

  //   console.log(this.formdata.value);
  //   this.CrudService.updateForm(data);

  // }
  savedisease(data) {
    this.CrudService.updateProfile(data);
  }

  savenote() {
    let data = this.formnote.value;
    this.CrudService.updateNote(data);
  }
  ///////

  getOrders() {
    return [

      { id: '1', name: 'Ayurvedic Hospital' },
      { id: '2', name: 'Arthritis' },
      { id: '3', name: 'Beauty Spa' },
      { id: '4', name: 'cancer' },
      { id: '5', name: 'Chronic Ulcers' },
      { id: '6', name: 'Cholestrol' },
      { id: '7', name: 'Diabetic Ulcers' },
      { id: '8', name: 'Diabetes Mellitus' },
      { id: '9', name: 'ENT' },
      { id: '10', name: 'Fistula' },
      { id: '11', name: 'Gynaecological Disorders' },
      { id: '12', name: 'Gastritis' },
      { id: '13', name: 'Hemorrhoids' },
      { id: '14', name: 'Hypertension' },
      { id: '15', name: 'Neurological Disorders' },
      { id: '16', name: 'Orthopedics' },
      { id: '17', name: 'Obesity' },
      { id: '18', name: 'Paralysis / Hemiplagia' },
      { id: '19', name: 'Pediatrics' },
      { id: '20', name: 'Spinal Disorders' },
      { id: '21', name: 'Skin Disorders' },
      { id: '22', name: 'Urinary Calculi' },
      { id: '23', name: 'Urinary Disease' },
      { id: '24', name: 'Varicose Venis' },
      { id: '25', name: 'I have a medical hospital for all diseases' }

    ];
  }

}
