import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{CrudService}from '../../core/crud.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-delete-account',
  templateUrl: './view-delete-account.component.html',
  styleUrls: ['./view-delete-account.component.scss']
})


export class ViewDeleteAccountComponent implements OnInit {
  docheadElements = ['Doctor Name', 'E-mail','Position','City','PhoneNumber'];
  patheadElements=['Patient Name','E-mail','City',' PhoneNumber'];
  my_id:string;
  constructor(private afs: AngularFirestore,private crudservice:CrudService,private router:Router) {

    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(14);
   }
   click;
   docCol:AngularFirestoreCollection;
   doc:Observable<any>;
   patCol:AngularFirestoreCollection;
   pat:Observable<any>;
  ngOnInit() {
  }

  docComFunc(){
    this.click=true;
    this.docCol=this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DeleteDocAccount');
this.doc=this.docCol.valueChanges();

// this.docCol = this.afs.collection('Doctors');


    // this.doc = this.docCol.snapshotChanges().pipe(
    //   map(actions => actions.map(a=>{
    //     const id = a.payload.doc.id;
    //     const data = a.payload.doc.data() as DocAccount;
    
    
    //     return {id,...data};
    //   }))
    // )
    


  }



  

  patComFunc(){
    this.click=false;
    this.patCol=this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DeletePatAccount');
    this.pat=this.patCol.valueChanges();
  
    // this.patCol = this.afs.collection('Patients');


    // this.pat = this.patCol.snapshotChanges().pipe(
    //   map(actions => actions.map(a=>{
    //     const id = a.payload.doc.id;
    //     const data = a.payload.doc.data() as PatAccount;
    
    
    //     return {id,...data};
    //   }))
    // )


  }

}
