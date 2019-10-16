import { Component, OnInit, OnChanges } from '@angular/core';
import{Doctor} from '../../core/models/doctor.model';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore'; //for firestore connection
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import {AuthService} from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

import {FormGroup,FormControl, Validators,FormArray,FormBuilder} from '@angular/forms';
import { ImageService } from 'app/core/image.service';
import{GalleryImageModule} from '../../core/models/gallery-image/gallery-image.module';

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
export class DoctorprofilepageComponent implements OnInit  {


  postsCol:AngularFirestoreCollection< Doctors>;
  posts:Observable< Doctors[]>;
  post$:any;

  


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
 
 



 //comment section
 name:string;
 email:string;
 msg:string;

 //time slot
mt1:string;
mt2:string;
mt3:string;
tt1:string;
tt2:string;
tt3:string;

wt1:string;
wt2:string;
wt3:string;


tht1:string;
tht2:string;
tht3:string;


ft1:string;
ft2:string;
ft3:string;

st1:string;
st2:string;
st3:string;

sut1:string;
sut2:string;
sut3:string;

//pictures
// images:Observable<GalleryImageModule[]>;
 
formdata=new FormGroup({ 
  name:new FormControl(''),
  email:new FormControl('') ,
  msg:new FormControl('')

});



// imageList: any[];
// rowIndexArray: any[];

  constructor(   private  afs: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private afAuth:AngularFireAuth,private imageService:ImageService ) {
  


  }

  

  ngOnInit() {
 
//    //get image details
//  this.images =this.imageService.getImages();
 
    // window.document.body.style.backgroundImage='url(https://monodomo.com/free-wallpapers/ayurveda-wallpapers-desktop-background-For-Free-Wallpaper.jpg)';
 
 
 this.postsCol=this.afs.collection('Doctors');
 this.posts=this.postsCol.valueChanges();
 this.postsCol.doc('sJ8197FwroSuZepVVnEN4DD9UA13').ref.get().then((doc)=>{
   this.post$=doc.data();
 });
 
 
 
 
  }
  

//pass patients comments from doctor view page
  savevalue(data) {
    this.CrudService.passData(data);
   
  }



}
