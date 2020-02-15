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
import { switchMap, map } from 'rxjs/operators';
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

//appointment related interfaces
export interface Time{
 
  time:string
}

export interface avail{

  avail:boolean
}
export interface timeslots{
  Time:Time[],
  avail:avail[]

}

export interface timeslotid extends timeslots { ap_id: string; }
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss'],
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  
  `]
})
export class SecondpageComponent implements OnInit {

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
 
 No:string;
 Lane1:string;
 Lane2:string;
 



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


ap:Observable<timeslotid[]>;

  constructor( private  afs: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private afAuth:AngularFireAuth ) {
    
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(7);
    console.log(this.my_id);
//     this.user = this.afAuth.authState.pipe(
//       switchMap(user => {
//         if (user) {
//           console.log("hey");
//           this.posts= this.afs.doc<Doctors[]>(`Doctors/${user.uid}`).valueChanges();
//           this.postsCol=this.afs.collection('Doctors');
//           this.posts=this.postsCol.valueChanges();
//           this.postsCol.doc(user.uid).ref.get().then((doc)=>{
//           this.post$=doc.data();
// });
 
         
//         } else {
//           return of(null)
//         }
//       })
//     )


    // const data=afs.collection('Doctors', ref => ref.where('Userid', '==', this.id_current));
   
 
    this.ap=this.afs.collection<timeslots>('Doctors').doc(this.my_id).collection('Timeslots').snapshotChanges()
.pipe(
  map(actions => actions.map(a => {
    const ap_id =a.payload.doc.id;
    const ap_data = a.payload.doc.data() as timeslots;
    const n =a.payload.doc.data().Time.length; 

    return { ap_id, ...ap_data,n };

}))
);
  }

  

  ngOnInit() {
    // var rellaxHeader = new Rellax('.rellax-header');

 
 this.postsCol=this.afs.collection('Doctors');
 this.posts=this.postsCol.valueChanges();
 this.postsCol.doc(this.my_id).ref.get().then((doc)=>{
   this.post$=doc.data();
});
 


 



 
 
  }
  

//pass patients comments from doctor view page
  // savevalue(data) {
  //   this.CrudService.passData(data);
   
  // }



}
