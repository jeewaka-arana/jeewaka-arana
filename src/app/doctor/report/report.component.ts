import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Options } from 'selenium-webdriver/ie';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { CrudService } from 'app/core/crud.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
//line chart

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Doctors } from '../doctoradminpage/doctoradminpage.component';




interface Order {
  Pname: string;
  date: string;
  time: string;
  tp: string;
  disease: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  x: any;
  y: any;
  m:any;
  d:any;
  p: any;
  today: number = Date.now();

  headElements = ['Patient Name', 'Appoinment Date', 'Appoinment Time','Telephone No'];

  postsCol:AngularFirestoreCollection< Doctors>;
  post$:any;



  appCol: AngularFirestoreCollection<Order>;
  apps: Observable<Order[]>;


  QueryCol: AngularFirestoreCollection;
  Query: Observable<any>;

countPatSriCol:AngularFirestoreCollection;
countPatSri:Observable<any>;

countPatForCol:AngularFirestoreCollection;
countPatFor:Observable<any>;

  a: AngularFirestoreCollection;
  //a:Observable<any>



  @ViewChild('content',{static:false}) content: ElementRef;


  // public downloadPDF() {
  //   let doc = new jsPDF();
  //   let specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;

  //     }
  //   };
  //   let content = this.content.nativeElement;
  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     'width': 190,
  //     'elementHAndlers': specialElementHandlers
  //   });


  //   doc.save('Report.pdf');
  //}

  my_id: string;
  counter: any = 0;
  value: any;
  year:any;
  month:any;

  constructor(private afs: AngularFirestore, private CrudService: CrudService, private AuthService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(8);
    console.log(this.my_id);
  }

  ngOnInit() {

    //To show data in console
    //this.x=this.apps.subscribe((data)=>console.log(data.length));
    // console.log("Hi");
    this.postsCol=this.afs.collection('Doctors');
    this.postsCol.doc(this.my_id).ref.get().then((doc)=>{
      this.post$=doc.data();
   });
    
    




  }


  posFilter(data) {






    // console.log(data);
    // console.log("hi");

    this.QueryCol = this.afs.collection('Doctors').doc(this.my_id).collection('Appointments', ref => ref.where('Year', '==', +data));
    console.log(this.QueryCol);
    this.Query = this.QueryCol.valueChanges();
    console.log(this.Query);
    this.Query.subscribe((data) => { this.y = data.length });
   // console.log(this.y);
  this.year=data;
  // console.log(this.year)

  }


  monthFilter(dmonth){

    this.QueryCol=this.afs.collection('Doctors').doc(this.my_id).collection('Appointments', ref => ref.where('Month','==',+dmonth).where('Year','==',+this.year));
    this.Query = this.QueryCol.valueChanges();
    this.Query.subscribe((data) => { this.m = data.length });
    console.log(this.m);
    this.month=dmonth;

  }
  dayFilter(day){
    this.QueryCol=this.afs.collection('Doctors').doc(this.my_id).collection('Appointments', ref => ref.where('Month','==',+this.month).where('Year','==',+this.year).where('Day','==',+day));
    this.Query = this.QueryCol.valueChanges();
    this.Query.subscribe((data) => { this.d = data.length });
  }

  

}
