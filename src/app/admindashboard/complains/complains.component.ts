import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface DocComplain{
 Email:string;
 Firstname:string;
 Lastname:string;
 msg:string;

}

export interface PatComplain{

  name:string;
  issue:string;
  email:string;
}
export interface PatComplainId extends PatComplain{id:string}

//interface to capture doc id
export interface DocComplainId extends DocComplain { id: string; }

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.scss']
})
export class ComplainsComponent implements OnInit {
  click;
  docCol:AngularFirestoreCollection;
  doc:Observable<any>;
  patCol:AngularFirestoreCollection;
  pat:Observable<any>;

my_id:string;
  verifyCol:AngularFirestoreCollection;
  pat_verify:Observable<any>;
  


  docheadElements = ['Doctor Name', 'E-mail', 'Message'];
  patheadElements=['Patient Name','E-mail','Message'];
  constructor(private afs: AngularFirestore,private router:Router) { 

    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(15);
  }

  ngOnInit() {

    this.verifyCol = this.afs.collection('DoctorIssues');


    this.pat_verify = this.verifyCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as DocComplain;
    
    
        return {id,...data};
      }))
    )
    

  }

  docComFunc(){

    this.click=true;
    this.docCol = this.afs.collection('DoctorIssues');


    this.doc = this.docCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as DocComplain;
    
    
        return {id,...data};
      }))
    )
    

//     this.click=true;
//     this.docCol=this.afs.collection('DoctorIssues');
// this.doc=this.docCol.snapshotChanges();
  }

  
  patComFunc(){
    this.click=false;

    this.patCol = this.afs.collection('Issues');


    this.pat = this.patCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as PatComplain;
    
    
        return {id,...data};
      }))
    )
    
    // this.patCol=this.afs.collection('Issues');
    // this.pat=this.patCol.valueChanges();

  }



  
  deleteDoctorcomplains(id:any)
  {

    if (confirm("Are you sure to delete this record?")) {
     
      this.afs.collection('DoctorIssues').doc(id).delete();
      
    }



  }



  deletePatientcomplains(id:any)
  {

    if (confirm("Are you sure to delete this record?")) {
      this.afs.collection('Issues').doc(id).delete();
      

      // this.afs.collection('DoctorIssues', ref => ref.where('Email','==',mail)).get().then
    }


  }
}
