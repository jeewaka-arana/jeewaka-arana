import { Component, OnInit } from '@angular/core';
import{Doctor} from '../../core/models/doctor.model';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore'; //for firestore connection
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import {AuthService} from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
//retrive  data
interface Doctors{

  DocId:string;
  FirstName:string;
  LastName:string;
  UserName:string;
  Email:string;
  Phone:number;
  NIC:string;
  Country:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  FileUrl:string;
  Password:string;
 profilepic:string;
  Specialist:string;
 Address:string;
 dateTime:string;
 note:string;
 img1:string;
 img2:string;
 img3:string;
 video:string;
 article:string;


}
@Component({
  selector: 'app-doctorprofilepage',
  templateUrl: './doctorprofilepage.component.html',
  styleUrls: ['./doctorprofilepage.component.scss']
})


//view data from doctoradmin page
export class DoctorprofilepageComponent implements OnInit {


  postsCol:AngularFirestoreCollection< Doctors>;
  posts:Observable< Doctors[]>;


  DocId:string;
  Firstname:string;
  Lastname:string;
  UserName:string;
  Email:string;
  Phone:number;
  NIC:string;
  Country:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  FileUrl:string;
  Password:string;
 profilepic:string;
  Specialist:string;
 Address:string;
 dateTime:string;
 note:string;
 img1:string;
 img2:string;
 img3:string;
 video:string;
 article:string;




  // private itemsCollection: AngularFirestoreCollection<Doctor>;
  // Doctorview: Observable<Doctor[]>;

  constructor(private  afs: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router) {
  //   this.itemsCollection = afs.collection<Doctor>('Doctors');
  
  //   this.Doctorview = this.itemsCollection.valueChanges();



  }

  

  ngOnInit() {
 
 
 
    // window.document.body.style.backgroundImage='url(https://monodomo.com/free-wallpapers/ayurveda-wallpapers-desktop-background-For-Free-Wallpaper.jpg)';
 
 
 this.postsCol=this.afs.collection('Doctors');
 this.posts=this.postsCol.valueChanges();
 
 
 
 
  }


}
