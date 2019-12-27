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
import { AngularFireDatabase } from '@angular/fire/database';


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
   y:any;
   p:any;
  today: number = Date.now();

val ;

  //
  appCol:AngularFirestoreCollection<Order>;
  apps:Observable<Order[]>;
  
  
  QueryCol:AngularFirestoreCollection;
  Query:Observable<any>;

 
  a:AngularFirestoreCollection;
//a:Observable<any>


 @ViewChild('content',{static: false}) content :ElementRef;


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
 counter:any =0;
 value:any;
 
  constructor(private afs:AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private afAuth:AngularFireAuth) { 
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(8);
    console.log(this.my_id);
  }

  ngOnInit() {
    // this.appCol = this.afs.collection('Doctors').doc(this.my_id).collection('viewappoinment');
    // this.apps = this.appCol.valueChanges();



//To show data in console
//this.x=this.apps.subscribe((data)=>console.log(data.length));
// console.log("Hi");
//correct code
// this.apps.subscribe((data)=>{this.x = data.length});

// if(this.value){
//   this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment',ref=>ref.where('year','==',this.value));
//   this.Query=this.QueryCol.valueChanges();
//   this.Query.subscribe((data)=>{this.y = data.length});

// }
 
 



// //This is undefined
 


  }

  
  posFilter(data){

    
    //newwwwwwwwwwwwwww
    
    this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2')
    .collection('viewappoinment',ref=>ref.where('year','==',data))
    .valueChanges().subscribe( values =>{ this.val = values; console.log(this.val)});

//this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment',ref=>ref.where('year','==',data));

// let mycollectionRef = this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment');

// mycollectionRef.where('foo', '==', 'bar').get().then(querySnapshot => {
//   querySnapshot.forEach(documentSnapshot => {
//     console.log(`Found document at ${documentSnapshot.ref.path}`);
//   });
// });
  
//newwwwwwwwwwwwwwwwwwwww


  //   console.log(data);
  //   console.log("hi");
 
  //  this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2')
  //  .collection('viewappoinment',ref=>ref.where('year','==',data));
  // console.log(this.QueryCol);
  //  this.Query=this.QueryCol.valueChanges();
  //  console.log(this.Query);

  //  this.counter=this.QueryCol.get();
  //  console.log(this.counter);


  //  this.Query.forEach(this.counter=this.counter + 1);
  //  console.log(this.counter);



  
   // console.log("hi");
  // console.log(this.QueryCol);
  
  // console.log(data);
 // this.Query=this.QueryCol.valueChanges();

//abovessssss
//console.log(this.Query)
//this.x=this.apps.subscribe((data)=>console.log(data.length));
 //this.Query.subscribe((data)=>{ this.y = data.length});
//  console.log(this.y);
//   console.log("new");
  
  //  this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment');
 
   // this.a=  this.QueryCol.ref.where('name','==',data);
  //  this.Query=this.a.valueChanges();

//  a:AngularFirestoreCollection;

//new try













  //this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment');
 //this.Query=this.QueryCol.valueChanges();

  }


  // 


 
  // 




}
