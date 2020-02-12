import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{CrudService}from '../../core/crud.service'
import { Observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';

@Component({
  selector: 'app-handleaccounts',
  templateUrl: './handleaccounts.component.html',
  styleUrls: ['./handleaccounts.component.scss']
})
export class HandleaccountsComponent implements OnInit {
  list: Doctor[];
  // @Input() id:string;
  docheadElements = ['Doctor Name', 'E-mail', 'City',' '];
  patheadElements=['Patient Name','E-mail','City',' '];
  constructor(private afs: AngularFirestore,private crudservice:CrudService) { }
  click;
  docCol:AngularFirestoreCollection;
  doc:Observable<any>;
  patCol:AngularFirestoreCollection;
  pat:Observable<any>;
  
  deleteDocCol:AngularFirestoreCollection;
  deleteDoc:Observable<any>;

  deletePatCol:AngularFirestoreCollection;
  deletePat:Observable<any>;
  ngOnInit() {

  
  }


  docComFunc(){
    this.click=true;
    this.docCol=this.afs.collection('Doctors');
this.doc=this.docCol.valueChanges();

  }



  

  patComFunc(){
    this.click=false;
    this.patCol=this.afs.collection('Patients');
    this.pat=this.patCol.valueChanges();

  }

  deleteDoctor(id:any)
  {

    if (confirm("Are you sure to delete this record?")) {
     

      this.afs.collection('Doctors').doc(id).delete();
    }



  }
  deletePatient(){


  }
}
