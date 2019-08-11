import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {FormGroup,FormControl} from '@angular/forms';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';



import{Doctoradminpage}from '../../core/models/doctoradminpage.model';


@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss']
})
export class DoctoradminpageComponent implements OnInit {


formdata=new FormGroup({ 
   
  name :new FormControl(''),
  Specialist:new FormControl(''),
  QualifiedStatus:new FormControl(''),
  Address:new FormControl(''),
  tp:new FormControl(''),
  email:new FormControl(''),
  dateTime:new FormControl('')
 });

  constructor(private CrudService:CrudService,private router:Router) { }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/doctoradmin.jpg")';
    this.formdata;

  }


  savevalue(data) {
    this.CrudService.updateProfile(data);
   
  }

}
