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

import { firestore } from 'firebase';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as Rellax from 'rellax';

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
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class FirstpageComponent implements OnInit {


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



// user: Observable<Doctors>;
// imageList: any[];
// rowIndexArray: any[];
my_id:string;

  constructor(private  afs: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private afAuth:AngularFireAuth ) {
   
   
  
    this.my_id=afAuth.auth.currentUser.uid;
    localStorage.setItem('userid',this.my_id);
    
    


   }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    const userid = localStorage.getItem('userid');
 this.postsCol=this.afs.collection('Doctors');
 this.posts=this.postsCol.valueChanges();
 this.postsCol.doc(userid).ref.get().then((doc)=>{
   this.post$=doc.data();
  });
 



  

  }

  // savevalue(data) {
  //   this.CrudService.passData(data);
   
  // }


  
  //popup button for special note

  
//   openModal(id: string) {
//     this.modalService.open(id);
// }

// closeModal(id: string) {
//     this.modalService.close(id);
// }


}
