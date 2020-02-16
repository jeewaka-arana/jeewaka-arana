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
import { DatePipe, formatDate } from '@angular/common';

export enum Weekdays{
  Sunday=1,
  Monday=2,
  Tuesday=3,
  Wednesday=4,
  Thursday=5,
  Friday=6,
  Saturday=7,
}


@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.scss']
})
export class SearchdoctorComponent implements OnInit {
  
  currentmonth=parseInt(this.datePipe.transform(new Date(),"MM"));
  currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
  currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));
  currentdayname=(this.datePipe.transform(new Date(),"EEEE"));
  dayname=this.currentdayname;
  daynum=Weekdays[this.dayname];
  
  results: any;
  filteredNames: any[] = [];

  lat: number;
  lng: number;

  page = 1;
  pageSize = 4;

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

  timeslots=[];
  all: any;
  availarray: any[] = [];
  avail=[];
  myslots=[];
  aslots=[];
  docid:string;
  allDoc:AngularFirestoreDocument;
  allCol: AngularFirestoreCollection<any>;
  allslots: Observable<any[]>;
  alldoc:Observable<any[]>;
  slotCol: AngularFirestoreCollection<any>;
  slotDoc: AngularFirestoreDocument;
  slots: Observable<any[]>;
  slotdoc:Observable<any[]>;
 message:string;

  constructor(private afs: AngularFirestore, private router: Router, private datePipe: DatePipe) {
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
    // console.log("hi");
    this.patDoc = this.afs.collection('Patients').doc(this.my_id);
    // console.log("hi");
    this.patDoc.valueChanges().subscribe(doc => {
      this.myCity = doc.City;
      // console.log("hi");
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

  getToday(){
    this.filteredNames = [];
    this.docid=this.dayname;//current day

    this.allCol= this.afs.collection('Doctors', ref => ref.orderBy('Firstname'));
    this.allCol.valueChanges().subscribe(all => {
    this.all = all;
    
    // console.log(this.all);
    
    this.all.forEach(element => {
      const id=element.Userid;
      // console.log(id);
      this.slotDoc = this.afs.collection('Doctors').doc(id).collection('Timeslots').doc(this.docid);
      // console.log(this.slotDoc);
      this.slotDoc.valueChanges().subscribe(value=>{
             if(value){
               this.myslots=[];
               this.timeslots=value.Time;
               this.avail=value.avail;
               this.myslots=this.timeslots.map(function(x,i){
                 return {"time":x,"avail":this.avail[i]}
               }.bind(this));
             }
                
                //  console.log(this.myslots);
                 for (let x = 0; x < this.myslots.length; x++) {
                    if(this.myslots[x].avail==true)
                 {
                   this.filteredNames.push(element);
                   break;
                 }

                 }
                
                 
               })
               console.log(this.filteredNames);
               
    })
    // this.applyFilters();
  })

}



}
