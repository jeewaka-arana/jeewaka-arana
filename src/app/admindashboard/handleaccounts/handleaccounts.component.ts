import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{CrudService}from '../../core/crud.service'
import { Observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import { Router } from '@angular/router';
import { map, delay } from 'rxjs/operators';


export interface DocAccount{
  Email:string;
  Firstname:string;
  Lastname:string;
  City:string;
 
 }
 
 export interface PatAccount{
 
  Email:string;
  Firstname:string;
  Lastname:string;
  City:string;
 }
 export interface PatId extends PatAccount{id:string}
 
 //interface to capture doc id
 export interface DocId extends DocAccount { id: string; }

@Component({
  selector: 'app-handleaccounts',
  templateUrl: './handleaccounts.component.html',
  styleUrls: ['./handleaccounts.component.scss']
})
export class HandleaccountsComponent implements OnInit {
  list: Doctor[];

  my_id:string;

  // @Input() id:string;
  docheadElements = ['Doctor Name', 'E-mail','Position','City','PhoneNumber'];
  patheadElements=['Patient Name','E-mail','City',' PhoneNumber'];
  constructor(private afs: AngularFirestore,private crudservice:CrudService,private router:Router) {
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(15);


   }
  click;
  docCol:AngularFirestoreCollection;
  doc:Observable<any>;
  patCol:AngularFirestoreCollection;
  pat:Observable<any>;
  
  deleteDocCol:AngularFirestoreCollection;
  deleteDoc:Observable<any>;

  deletePatCol:AngularFirestoreCollection;
  deletePat:Observable<any>;
 
  query1:any;
  query2:any;


  //

  // Email:string;
  // Firstname:string;
  // Lastname:string;
  // City:string;

  
  ngOnInit() {

  
  }


  docComFunc(){
    this.click=true;
//     this.docCol=this.afs.collection('Doctors');
// this.doc=this.docCol.valueChanges();

this.docCol = this.afs.collection('Doctors');


    this.doc = this.docCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as DocAccount;
    
    
        return {id,...data};
      }))
    )
    


  }



  

  patComFunc(){
    this.click=false;
    // this.patCol=this.afs.collection('Patients');
    // this.pat=this.patCol.valueChanges();

    this.patCol = this.afs.collection('Patients');


    this.pat = this.patCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as PatAccount;
    
    
        return {id,...data};
      }))
    )


  }

  deleteDoctor(id:any,data:any)
  {

   
    
    
    if (confirm("Are you sure to delete this record?")) {
      
     this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DeleteDocAccount').add({'Firstname':data.Firstname,'Lastname':data.Lastname,'Email':data.Email,'Position':data.Position,'City':data.City,'PhoneNumber':data.PhoneNumber});
     console.log(data);
     this.afs.collection('Doctors').doc(id).delete();
    }



  }


  deletePatient(id:any,data:any){
 console.log(data);


  if (confirm("Are you sure to delete this record?")) {
this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DeletePatAccount').add({Firstname:data.Firstname,Lastname:data.Lastname,Email:data.Email,PhoneNumber:data.PhoneNumber,City:data.City});
  this.afs.collection('Patients').doc(id).delete();
    }
   //this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DeletePatAccount').add({Firstname:data.Firstname,Lastname:data.Lastname,Email:data.Email,PhoneNumber:data.PhoneNumber,City:data.City});
  // return this.query1,this.query2; 

}
}