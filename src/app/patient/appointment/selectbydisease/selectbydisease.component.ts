import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable, of } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import {FormGroup,FormControl, Validators,FormArray,FormBuilder} from '@angular/forms';
import * as _ from 'lodash';



@Component({
  selector: 'app-selectbydisease',
  templateUrl: './selectbydisease.component.html',
  styleUrls: ['./selectbydisease.component.scss']
})
export class SelectbydiseaseComponent implements OnInit {

  // results: any[] = [];
  // postsCol: AngularFirestoreCollection<Post>;
  // posts: Observable<Post[]>;

  orders = [];
  form: FormGroup;
  disease: { id: string; name: string; }[];
  // formBuilder: any;

  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  expyear: number;

  filters ={};
  results: any;
  filteredNames: any[] = [];


  constructor(private afs: AngularFirestore,private fb:FormBuilder,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      diseases: ['']
    });

    // async orders
    of(this.getOrders()).subscribe(diseases => {
      this.disease = diseases;
      this.form.controls.disease.patchValue(this.disease[0].id);
    });
   }

  ngOnInit() {
    this.afs.collection('Doctors',ref => ref.limit(4).orderBy('Lastname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters()
    })

  }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string){
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterArea(property: string, rule: string){
    if(!rule) this.removeFilter(property)
    else{
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  removeFilter(property: string){
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

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
      {id:'23',name:'Urinary Disease'},
      {id:'24',name:'Varicose Venis'},
      {id:'25',name:'I have a medical hospital for all diseases'}
  
    ];
  }

}
