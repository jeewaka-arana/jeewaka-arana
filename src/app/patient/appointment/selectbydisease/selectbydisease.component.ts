import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import {SearchdoctorService} from '../../../core/searchdoctor.service';
import { Observable} from 'rxjs/Rx'
import { observable, of } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import { AngularFireAuth } from '@angular/fire/auth';
import {FormGroup,FormControl, Validators,FormArray,FormBuilder} from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';

interface Doctors{
  
}

@Component({
  selector: 'app-selectbydisease',
  templateUrl: './selectbydisease.component.html',
  styleUrls: ['./selectbydisease.component.scss']
})
export class SelectbydiseaseComponent implements OnInit {

  specialist:string;

  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  expyear: number;

  QueryCol:AngularFirestoreCollection<Doctors>;
  Query:Observable<Doctors[]>
  Specialist:any=['Ayurvedic Hospital','Arthritis','Beauty Spa' ,'cancer','Chronic Ulcers','Cholestrol' , 'Diabetic Ulcers','Diabetes Mellitus', 'ENT'
  ,'Fistula', 'Gynaecological Disorders' ,'Gastritis' ,'Hemorrhoids' ,'Hypertension', 'Neurological Disorders', 'Orthopedics' 
  ,'Obesity','Paralysis / Hemiplagia', 'Pediatrics','Spinal Disorders','Skin Disorders' ,'Urinary Calculi','Urinary Calculi','Urinary Disease'
  ,'Varicose Venis','I have a medical hospital for all diseases'

];

  filters ={};
  results: any;
  filteredNames: any[] = [];
  page = 1;
  pageSize = 3;
my_id;

  constructor(private SearchDoctorService:SearchdoctorService,private fauth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {

    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(13);
    console.log(this.my_id);
   }

  ngOnInit() {
    this.afs.collection('Doctors',ref => ref.orderBy('Firstname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters()
    })

  }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string){
    if(!rule) this.removeFilter(property)
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  removeFilter(property: string){
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

}
