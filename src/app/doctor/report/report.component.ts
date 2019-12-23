import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Options } from 'selenium-webdriver/ie';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import{Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import {AuthService} from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


interface Order{
  Pname:string;
  date:string;
  time:string;
  tp:string;
  disease:string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
   x:any;
  today: number = Date.now();
  //
  appCol:AngularFirestoreCollection<Order>;
  apps:Observable<Order[]>;
  
  
 @ViewChild('content') content :ElementRef;


 public downloadPDF(){
 let doc =new jsPDF();
 let specialElementHandlers ={
 '#editor': function(element,renderer){
   return true;
 
 }
 };
 let content = this.content.nativeElement;
 doc.fromHTML(content.innerHTML,15,15,{
 'width':190,
 'elementHAndlers':specialElementHandlers
 });
 
 
 doc.save('Report.pdf');
 }

 my_id:string;
  constructor(private afs:AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private afAuth:AngularFireAuth ) { 
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(8);
    console.log(this.my_id);
  }

  ngOnInit() {
    this.appCol = this.afs.collection('Doctors').doc(this.my_id).collection('viewappoinment');
this.apps = this.appCol.valueChanges();
//this.x=this.apps.subscribe((data)=>console.log(data.length));
// console.log("Hi");
this.apps.subscribe((data)=>{this.x = data.length});

//


  }

}
