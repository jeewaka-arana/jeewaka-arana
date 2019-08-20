import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {FormGroup,FormControl} from '@angular/forms';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss']
})
export class DoctoradminpageComponent implements OnInit {


formdata=new FormGroup({ 
  profilepic:new FormControl(''),
  Specialist:new FormControl(''),
 
  Address:new FormControl(''),
  Phone:new FormControl(''),
 
  dateTime:new FormControl(''),
  note:new FormControl(''),
  img1:new FormControl(''),
  img2:new FormControl(''),

  img3:new FormControl(''),

  video:new FormControl(''),



 });

  constructor(private CrudService:CrudService,private router:Router) { }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/Ayurveda-101.jpeg")';
    this.formdata;

  }


  savevalue(data) {
    this.CrudService.updateProfile(data);
   
  }

}
