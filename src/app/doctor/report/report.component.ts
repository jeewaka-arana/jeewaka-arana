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



  //

  appCol: AngularFirestoreCollection<Order>;
  apps: Observable<Order[]>;


  QueryCol: AngularFirestoreCollection;
  Query: Observable<any>;


  a: AngularFirestoreCollection;
  //a:Observable<any>



  @ViewChild('content', { read: true, static: false }) content: ElementRef;


  public downloadPDF() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;

      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHAndlers': specialElementHandlers
    });


    doc.save('Report.pdf');
  }

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

    // this.appCol = this.afs.collection('Doctors').doc(this.my_id).collection('viewappoinment');
    // this.apps = this.appCol.valueChanges();
    // this.apps.subscribe((data)=>{this.x = data.length});



    //To show data in console
    //this.x=this.apps.subscribe((data)=>console.log(data.length));
    // console.log("Hi");
    //correct code
    // 

    




  }


  posFilter(data) {






    // console.log(data);
    // console.log("hi");

    this.QueryCol = this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment', ref => ref.where('year', '==', +data));
    console.log(this.QueryCol);
    this.Query = this.QueryCol.valueChanges();
    console.log(this.Query);
    this.Query.subscribe((data) => { this.y = data.length });
    console.log(this.y);
  this.year=data;
  }


  monthFilter(dmonth){

    this.QueryCol=this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment', ref => ref.where('month','==',+dmonth).where('year','==',+this.year));
    this.Query = this.QueryCol.valueChanges();
    this.Query.subscribe((data) => { this.m = data.length });
    console.log(this.m);
    this.month=dmonth;

  }
  dayFilter(day){
    this.QueryCol=this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment', ref => ref.where('month','==',+this.month).where('year','==',+this.year).where('day','==',+day));
    this.Query = this.QueryCol.valueChanges();
    this.Query.subscribe((data) => { this.d = data.length });
  }

  

}
