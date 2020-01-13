import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import { Star } from 'app/core/models/star.model';
import * as _ from 'lodash';
import * as geofirex from "geofirex";
import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebaseConfig);
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.scss']
})
export class SearchdoctorComponent implements OnInit {

  results: any;
  filteredNames: any[] = [];

  lat: number;
  lng: number;

  page = 1;
  pageSize = 2;

  Firstname: string;
  Lastname: string;
  Email: string;
  PhoneNumber: number;
  NIC: string;
  City: string;
  Position: string;
  RegistrationNumber: string;
  ExpYears: number;

  geo = geofirex.init(firebase);
  points: Observable<any>;

  my_id;
  patDoc: AngularFirestoreDocument;
  pat: any;
  myCity: any;

  filters = {}
  letter = new FormControl('');
  farray: any[] = [];
  ans: string;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(14);
    console.log(this.my_id);
  }

  ngOnInit() {
    this.afs.collection('Doctors', ref => ref.orderBy('Lastname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters();
    })

    this.getUserLocation();


  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }



  // createPoint() {
  //     const cities = this.geo.collection('Location');
  //     const point = this.geo.point(40, -119);
  //     cities.add({ name: 'Phoenix', position: point.data });
  // }



  // createPoint1(lat, lng) {
  //   const collection = this.geo.collection('Location')

  // Use the convenience method
  // collection.setPoint('my-place', lat, lng)

  // Or be a little more explicit 
  //   const point = this.geo.point(lat, lng)
  //   collection.setDoc('my-place', { position: point.data })
  // }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterArea(property: string, rule: string) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  send() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.ExpYears > n2.ExpYears) { return 1 }
      if (n1.ExpYears < n2.ExpYears) { return -1 }
      return 0;
    })
    this.applyFilters()
  }

  send2() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.ExpYears < n2.ExpYears) { return 1 }
      if (n1.ExpYears > n2.ExpYears) { return -1 }
      return 0;
    })
    this.applyFilters()
  }




  // ngOnInit() {


  // this.examplesCol=this.afs.collection('Doctors', ref => ref.orderBy('Firstname'));
  // this.examples=this.examplesCol.valueChanges();
  // this.examplesCol=this.afs.collection('example', ref => ref.orderBy('number').where("number", "==", 2));
  // this.examplesCol=this.afs.collection('example', ref => ref.where("number", ">", 0).where("number", "<=", 3));

  //}

  getCity() {
    this.results = [];
    this.patDoc = this.afs.collection('Patients').doc(this.my_id);
    this.patDoc.valueChanges().subscribe(doc => {
      this.myCity = doc.City;
      console.log(this.myCity);
      this.afs.collection('Doctors', ref => ref.where("City", "==", this.myCity)).valueChanges().subscribe(results => {
        this.results = results;
        this.applyFilters();
      })
    })
    // this.farray=[];
    // for(var i = 0;i<this.filteredNames.length;i++) { 
    //       console.log(this.filteredNames);
    //       var v:string = this.filteredNames[i].City ;
    //       console.log(v);
    //       if (this.filteredNames[i].City===this.myCity) { 
    //               console.log("yes") ;
    //               this.farray.push(this.filteredNames[i]);
    //            } 
    //            else {
    //             console.log("no"); 
    //          }
    //         }
    //    console.log(this.farray);

    // this.afs.collection('Doctors',ref => ref.where("City", "==", this.myCity)).valueChanges().subscribe(results => {
    //   this.results = results;
    //   console.log(this.results);
    //   this.applyFilters();
    // })

  }


}




