import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import { Star } from 'app/core/models/star.model';
import * as _ from 'lodash';
import * as geofirex from "geofirex";
import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebaseConfig);
import { environment } from 'environments/environment';


@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.scss']
})
export class SearchdoctorComponent implements OnInit {

  results: any;
  filteredNames: any[] = [];

  patientDoc: AngularFirestoreDocument<any>;
  doctorDoc: AngularFirestoreDocument<any>;
  
  patient: Observable<any>;
  doctor: Observable<any>; 

  lat: number;
  lng: number;
  
  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  ExpYears: number;

  geo = geofirex.init(firebase);
  points: Observable<any>;
  
  
  filters = {}

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.afs.collection('Doctors',ref => ref.orderBy('Lastname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters()
    })

    this.patientDoc = this.afs.doc('Patients');
    this.doctorDoc = this.afs.doc('Doctors');

    this.patient = this.patientDoc.valueChanges();
    this.doctor = this.doctorDoc.valueChanges();
    
    this.getUserLocation();


    }

    getUserLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      });
    }
}

    patientId() {
        return this.patientDoc.ref.id;
      }

    doctorId() {
        return this.doctorDoc.ref.id
      }

  createPoint() {
      const cities = this.geo.collection('Location');
      const point = this.geo.point(40, -119);
      cities.add({ name: 'Phoenix', position: point.data });
  }

  

  createPoint1(lat, lng) {
    const collection = this.geo.collection('Location')

    // Use the convenience method
    // collection.setPoint('my-place', lat, lng)

    // Or be a little more explicit 
    const point = this.geo.point(lat, lng)
    collection.setDoc('my-place', { position: point.data })
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

  send(){
    this.results=this.results.sort((n1,n2) => {
      if(n1.ExpYears > n2.ExpYears) {return 1}
      if(n1.ExpYears < n2.ExpYears) {return -1}
      return 0;
    })
    this.applyFilters()
  }

  send2(){
    this.results=this.results.sort((n1,n2) => {
      if(n1.ExpYears < n2.ExpYears) {return 1}
      if(n1.ExpYears > n2.ExpYears) {return -1}
      return 0;
    })
    this.applyFilters()
  }

  
  

  // searchterm: string;

  // startAt = new Subject();
  // endAt = new Subject();

  // names;
  // start;
  // end;

  // startobs = this.startAt.asObservable();
  // endobs = this.endAt.asObservable();

  // examplesCol: AngularFirestoreCollection<Doctor>;
  // examples: Observable<Doctor[]>;

  // firstname:string;
  // lastname:string;
  // number:number;
  
  
  // constructor(private afs: AngularFirestore) { }

  // ngOnInit() {
    

    // this.examplesCol=this.afs.collection('Doctors', ref => ref.orderBy('Firstname'));
    // this.examples=this.examplesCol.valueChanges();
    // this.examplesCol=this.afs.collection('example', ref => ref.orderBy('number').where("number", "==", 2));
    // this.examplesCol=this.afs.collection('example', ref => ref.where("number", ">", 0).where("number", "<=", 3));
  
  //}

  // search($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs, this.endobs).subscribe((value) =>{
  //     this.firequery(value[0], value[1]).subscribe((firstnames) => {
  //       this.names=firstnames;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }
  // searchlocation($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs, this.endobs).subscribe((value) =>{
  //     this.firequery2(value[0], value[1]).subscribe((city) => {
  //       this.names=city;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }
  // firequery(start, end){
  //   return this.afs.collection('Doctors', ref => ref.limit(50).orderBy('Firstname').startAt(start).endAt(end)).valueChanges();
  // }
  // firequery2(start, end){
  //   return this.afs.collection('Doctors', ref => ref.limit(50).orderBy('City').startAt(start).endAt(end)).valueChanges();
  // }
  
  }
  



