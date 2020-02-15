import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs/Rx';
import * as _ from 'lodash';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe, formatDate } from '@angular/common';
import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
  selector: 'app-avail',
  templateUrl: './avail.component.html',
  styleUrls: ['./avail.component.scss']
})
export class AvailComponent implements OnInit {

  currentmonth=parseInt(this.datePipe.transform(new Date(),"MM"));
  currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
  currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));
  currentdayname=(this.datePipe.transform(new Date(),"EEEE"));
  dayname=this.currentdayname;
daynum=Weekdays[this.dayname];

  results: any[] = [];
  appresults: any[] = [];
  filteredNames: any[] = [];
  filters = {}
  letter = new FormControl('');
  farray: any[] = [];
  idCol: AngularFirestoreCollection<any>;
  postsCol: AngularFirestoreCollection<any>;
  posts: Observable<any>;

  timeslots=[];
  availarray: any[] = [];
  avail=[];
  myslots=[];
  aslots=[];
  docid:string;
  slotCol: AngularFirestoreCollection<any>;
  slotDoc: AngularFirestoreDocument;
  slots: Observable<any[]>;
  slotdoc:Observable<any[]>;
 message:string;

  page = 1;
  pageSize = 2;

  // myDate = new Date();
  date= formatDate(new Date(), 'yyyy/MM/dd', 'en');
 

  constructor(private afs: AngularFirestore, private datePipe: DatePipe,) { 
    this.afs.collection('Doctors', ref => ref.orderBy('Firstname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters();
    })
    // console.log(this.myDate);
    console.log(this.date);
    console.log(this.dayname);
    console.log(this.daynum);
  }

  ngOnInit() {
    this.afs.collection('Doctors', ref => ref.orderBy('Lastname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters();
      console.log("ng");
    })
  }

  applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters));
  }

  getToday(){

     this.docid=this.dayname;//current day

     this.afs.collection('Doctors', ref => ref.orderBy('Firstname')).valueChanges().subscribe(results => {
     this.results = results;})
    this.results.forEach(element => {
    const id=element.Userid;
    console.log(id);
    this.slotDoc = this.afs.collection('Doctors').doc(id).collection('Timeslots').doc(this.docid);
    console.log(this.slotDoc);
    this.slotDoc.valueChanges().subscribe(value=>{
      if(value){
        this.myslots=[];
        this.timeslots=value.Time;
        this.avail=value.avail;
        this.myslots=this.timeslots.map(function(x,i){
          return {"time":x,"avail":this.avail[i]}
        }.bind(this));
      }
         
          console.log(this.myslots);
          for (let x = 0; x < this.myslots.length; x++) {
            // const l = this.myslots[x];
             if(this.myslots[x].avail==true)
          {
            this.aslots=[];
            console.log(this.myslots[x].avail);
            this.results.push(this.myslots[x]);
          }
          }
         
          
        })
        
  });
   console.log(this.results);
     }
  
  


}
