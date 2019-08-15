import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {FormGroup,FormControl} from '@angular/forms';


import{Doctoradminpage}from './doctoradminpage.model';

interface Doctors{
  
  name :string;
  Specialist:string;
  QualifiedStatus:string;
  Address:string;
  tp:string;
  email:string;
  dateTime:string;

}

@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss']
})
export class DoctoradminpageComponent implements OnInit {
DoctorsCol :AngularFirestoreCollection<Doctoradminpage>;
Doctors:Doctoradminpage[];



//insert data
name :string;
Specialist:string;
QualifiedStatus:string;
Address:string;
tp:string;
email:string;
dateTime:string;


//
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/doctoradmin.jpg")';

this.DoctorsCol=this.afs.collection('Doctors');
this.DoctorsCol.valueChanges().subscribe(res=>{

  this.Doctors=res.map(item=>{
    return item as Doctoradminpage;
  })
});

console.log(this.Doctors);

  }

  //insert data function
  savevalue(){

    this.afs.collection('Doctors').add({'name':this.name, 'Specialist':this.Specialist,'QualifiedStatus':this.QualifiedStatus,'Address':this.Address,'tp':this.tp,'email':this.email,'dateTime':this.dateTime});

  }

}
