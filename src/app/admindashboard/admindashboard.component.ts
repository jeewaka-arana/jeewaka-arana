import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { CrudService } from 'app/core/crud.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
//line chart
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  x: any;
  dy: any;
  dm:any;
  dd:any;
  py:any;
  pm:any;
  pd:any;
  cs:any;
  cf:any;

  srilanka:any;
  foreign:any;

  p: any;
  today: number = Date.now();

  docheadElements = ['Doctor Name', 'Registered Date', 'Disease','Telephone No'];
  patheadElements = ['Patient Name', 'Registered Date', 'Country','City','Telephone No'];

  dQueryCol: AngularFirestoreCollection;
  dQuery: Observable<any>;


  pQueryCol: AngularFirestoreCollection;
  pQuery: Observable<any>;

  
countPatSriCol:AngularFirestoreCollection;
countPatSri:Observable<any>;

countPatForCol:AngularFirestoreCollection;
countPatFor:Observable<any>;

  a: AngularFirestoreCollection;
 
  countcountry;

// for total doctor count
doctorcountCol:AngularFirestoreCollection;
doctorcount:Observable<any>;

  doctorTotal:any;

  // for doctors city

  docCityCol:AngularFirestoreCollection;
  docCity:Observable<any>;
  cityCount:any;

  // 

  my_id: string;
  counter: any = 0;
  value: any;
  dyear:any;
  dmonth:any;
  pyear:any;
  pmonth:any;
  constructor(private afs: AngularFirestore, private CrudService: CrudService, private AuthService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(8);
    console.log(this.my_id);


    // 
    this.srilanka=0;
  this.foreign=0;
  }

  ngOnInit() {

   
    this.countPatSriCol=this.afs.collection('Patients', ref => ref.where('Country', '==', 'Srilanka'));
    this.countPatSri=this.countPatSriCol.valueChanges();
    this.countPatSri.subscribe((data) => { this.cs = data.length });

  console.log(this.countPatSri);


    
    this.countPatForCol=this.afs.collection('Patients', ref => ref.where('Country','<','Srilanka').where('Country','>','Srilanka'));
    this.countPatFor=this.countPatForCol.valueChanges();
    this.countPatFor.subscribe((datacount) => { this.cf = datacount.length });


    console.log(this.countPatFor);
    console.log("hai");

// get total doctors count
this.doctorcountCol=this.afs.collection('Doctors');
this.doctorcount=this.doctorcountCol.valueChanges();
this.doctorcount.subscribe((doc)=>{this.doctorTotal=doc.length});


  }

  docCityFilter(data)
  {
this.docCityCol=this.afs.collection('Doctors',ref => ref.where('City', '==', data));
this.docCity=this.docCityCol.valueChanges();
this.docCity.subscribe((c)=>{this.cityCount=c.length});


  }

  // 

  docYearFilter(data) {


    this.dQueryCol = this.afs.collection('Doctors', ref => ref.where('year', '==', +data));
    console.log(this.dQueryCol);
    this.dQuery = this.dQueryCol.valueChanges();
    console.log(this.dQuery);
    this.dQuery.subscribe((data) => { this.dy = data.length });
   // console.log(this.y);
  this.dyear=data;
  console.log(this.dyear)

  }


  docMonthFilter(dmonth){

    this.dQueryCol=this.afs.collection('Doctors', ref => ref.where('month','==',+dmonth).where('year','==',+this.dyear));
    this.dQuery = this.dQueryCol.valueChanges();
    this.dQuery.subscribe((data) => { this.dm = data.length });
    //console.log(this.m);
    this.dmonth=dmonth;
    console.log(this.dmonth);
    
  }
  docDayFilter(day){
    this.dQueryCol=this.afs.collection('Doctors', ref => ref.where('month','==',+this.dmonth).where('year','==',+this.dyear).where('day','==',+day));
    this.dQuery = this.dQueryCol.valueChanges();
    this.dQuery.subscribe((data) => { this.dd = data.length });
  }


  // patients
  
  patYearFilter(data) {


    this.pQueryCol = this.afs.collection('Patients', ref => ref.where('year', '==', +data));
    console.log(this.pQueryCol);
    this.pQuery = this.pQueryCol.valueChanges();
    console.log(this.pQuery);
    this.pQuery.subscribe((data) => { this.py = data.length });
   // console.log(this.y);
  this.pyear=data;
  console.log(this.pyear);

}
  patMonthFilter(pmonth){

    this.pQueryCol=this.afs.collection('Patients', ref => ref.where('month','==',+pmonth).where('year','==',+this.pyear));
    this.pQuery = this.pQueryCol.valueChanges();
    this.pQuery.subscribe((data) => { this.pm = data.length });
    //console.log(this.m);
    this.dmonth=pmonth;
    console.log(this.pmonth);
    
  }
  patDayDayFilter(pday){
    this.pQueryCol=this.afs.collection('Patients', ref => ref.where('month','==',+this.pmonth).where('year','==',+this.pyear).where('day','==',+pday));
    this.pQuery = this.pQueryCol.valueChanges();
    this.pQuery.subscribe((data) => { this.cs = data.length });
  }
  

  
  

}
