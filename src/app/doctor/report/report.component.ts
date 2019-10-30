import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Options } from 'selenium-webdriver/ie';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import{Observable} from 'rxjs/Observable';

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
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    this.appCol = this.afs.collection('Doctors').doc('sJ8197FwroSuZepVVnEN4DD9UA13').collection('viewappoinment');
this.apps = this.appCol.valueChanges();
  }

}
