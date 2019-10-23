import { Component, OnInit, Input } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {FormGroup,FormControl, Validators,FormArray,FormBuilder} from '@angular/forms';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import {AuthService} from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { validateConfig } from '@angular/router/src/config';
import { Doctor } from 'app/core/models/doctor.model';
import { AngularFireDatabase } from '@angular/fire/database';
import{Disease} from  '../../core/models/diseases.module';
import { of } from 'rxjs';



@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss']
})
export class DoctoradminpageComponent implements OnInit {
  orders = [];
 //for diseases list 

// diseases: Disease[]= [
//   {id:1,name:'help Desk'},
//   {id:2,name:'hr'},
//   {id:3,name:'home'},
//   ];


  //
  

Address:string;
Email:string;


// img : string;
// img1:string;
// img2:string;
// img3:string;
// video:string;
// selectedImage:any;
// image1:any;
// image2:any;
// image3:any;
// videoclip:any;
// isSubmitted:boolean;
// isSubmitted1:boolean;
// isSubmitted2:boolean;
// isSubmitted3:boolean;
// isSubmitted4:boolean;


formdata=new FormGroup({ 
  profilepicurl:new FormControl(''),
  Specialist:new FormControl('') ,
 
  Address:new FormControl(''),
  Phone:new FormControl(''),
 
  dateTime:new FormControl(''),
  note:new FormControl(''),
  img:new FormControl(''),
  img1:new FormControl(''),
  img2:new FormControl(''),

  img3:new FormControl(''),

  video:new FormControl(''),
// article:new FormControl(''),

cname:new FormControl(''),
cmail:new FormControl(''),
cmsg:new FormControl(''),

mt1:new FormControl(''),
mt2:new FormControl(''),
mt3:new FormControl(''),

tt1:new FormControl(''),
tt2:new FormControl(''),
tt3:new FormControl(''),

wt1:new FormControl(''),
wt2:new FormControl(''),
wt3:new FormControl(''),


tht1:new FormControl(''),
tht2:new FormControl(''),
tht3:new FormControl(''),

ft1:new FormControl(''),
ft2:new FormControl(''),
ft3:new FormControl(''),

st1:new FormControl(''),
st2:new FormControl(''),
st3:new FormControl(''),



sut1:new FormControl(''),
sut2:new FormControl(''),
sut3:new FormControl(''),
 });
  form: FormGroup;
  disease: { id: string; name: string; }[];


  my_id:string;
  
  

  constructor(private  afs: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService, private router:Router,private storage:AngularFireStorage,private afAuth:AngularFireAuth, private db: AngularFirestore,private fb:FormBuilder,private formBuilder: FormBuilder) { 
//copy
    this.my_id=afAuth.auth.currentUser.uid;
   
//
    this.form = this.formBuilder.group({
      diseases: ['']
    });

    // async orders
    of(this.getOrders()).subscribe(diseases => {
      this.disease = diseases;
      this.form.controls.disease.patchValue(this.disease[0].id);
    });

  }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/Ayurveda-101.jpeg")';
    this.formdata;
   

////
// this.resetForm();
  // this.resetForm1();
  //   this.resetForm2();
  //   this.resetForm3();
  //  this.resetFormvideo();
  
   
 
 
 }
 
//  showpreview(event:any){
//   if(event.target.files && event.target.files[0]){
//     const reader = new FileReader();
//     reader.onload=(e:any)=> this.img = e.target.result;
//     reader.readAsDataURL(event.target.files[0]);
//     this.selectedImage =event.target.files[0];
//   }
//   else{
//     this.img ='../../../assets/img/avatar.png';
//     this.selectedImage = null;
//   }

// }



  savevalue(data) {
    this.CrudService.updateProfile(data);
   
  }
  savedisease(data){
    this.CrudService.updateProfile(data);
  }
  ///////
 
  submitcomplain(data){
    this.CrudService. passData(data);
  }
// //
getOrders() {
  return [
  
    { id: '1', name: 'Ayurvedic Hospital' },
    { id: '2', name: 'Arthritis' },
    { id: '3', name: 'Beauty Spa' },
    { id: '4', name: 'cancer' },
    { id: '5', name: 'Chronic Ulcers' },
    { id: '6', name: 'Cholestrol' },
    { id: '7', name: 'Diabetic Ulcers' },
    { id: '8', name: 'Diabetes Mellitus' },
    { id: '9', name: 'ENT' },
    { id: '10', name: 'Fistula' },
    { id: '11', name: 'Gynaecological Disorders' },
    { id: '12', name: 'Gastritis' },
    { id: '13', name: 'Hemorrhoids' },
    { id: '14', name: 'Hypertension' },
    { id: '15', name: 'Neurological Disorders' },
    { id: '16', name: 'Orthopedics' },
    { id: '17', name: 'Obesity' },
    { id: '18', name: 'Paralysis / Hemiplagia' },
    { id: '19', name: 'Pediatrics' },
    { id: '20', name: 'Spinal Disorders' },
    { id: '21', name: 'Skin Disorders' },
    { id: '22', name: 'Urinary Calculi' },
    {id:'23',name:'Urinary Disease'},
    {id:'24',name:'Varicose Venis'},
    {id:'25',name:'I have a medical hospital for all diseases'}

  ];
}



  // get formControls(){

  //   return this.formdata['controls'];
  // }



  
  // profile picture










//   onSubmit(formValue){
// this.isSubmitted=true;
// if(this.formdata.valid){
//   var filePath = `ProfilePictures/${this.selectedImage.name}_${new Date().getTime()}`;
// const fileRef= this.storage.ref(filePath);
//   this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
//   finalize(async()=>{
//     fileRef.getDownloadURL().subscribe(async (url)=>{
// formValue['profilepicurl']=url;

// get url from storage
//  this.service.insertImageDetails(formValue);
 


// this.resetForm();
//     })
//   })
// ).subscribe();


// }



//   }


//   resetForm(){


//     this.formdata.reset();
// this.formdata.setValue({
//   profilepicurl:''
// });
// this.img='../../../assets/img/avatar.png';
// this.selectedImage=null;

// this.isSubmitted=false;
//   }



  


  //newly added functions for 3 photo upload


  //


//image1 all function
//   showpreview1(event:any){
//     if(event.target.files && event.target.files[0]){
//       const reader = new FileReader();
//       reader.onload=(e:any)=> this.img1 = e.target.result;
//       reader.readAsDataURL(event.target.files[0]);
//       this.image1 =event.target.files[0];
//     }
//     else{
//       this.img1 ='../../../assets/img/avatar.png';
//       this.image1 = null;
//     }
 
//   }
//   resetForm1(){


//     this.formdata.reset();
// this.formdata.setValue({
//   img1:''
// });
// this.img1='../../../assets/img/avatar.png';
// this.image1=null;

// this.isSubmitted1=false;
//   }









//submit img1 pictures to firebase
// submitImg1(formValue){


  // this.isSubmitted1=true;
  // if(this.formdata.valid){
  //   var filePath = `Img1/${this.image1.name}_${new Date().getTime()}`;
  // const fileRef= this.storage.ref(filePath);
  //   this.storage.upload(filePath,this.image1).snapshotChanges().pipe(
  //   finalize(()=>{
  //     fileRef.getDownloadURL().subscribe((url)=>{
  // formValue['img1']=url;
  //
  // this.service.insertImageDetails(formValue);
  //
//   this.resetForm1();
//       })
//     })
//   ).subscribe();
  
//   }
// }
//end of image1 function


//image 2 all function

// showpreview2(event:any){
//   if(event.target.files && event.target.files[0]){
//     const reader = new FileReader();
//     reader.onload=(e:any)=> this.img2 = e.target.result;
//     reader.readAsDataURL(event.target.files[0]);
//     this.image2 =event.target.files[0];
//   }
//   else{
//     this.img2 ='../../../assets/img/avatar.png';
//     this.image2 = null;
//   }

// }
// resetForm2(){


//   this.formdata.reset();
// this.formdata.setValue({
// img2:''
// });
// this.img2='../../../assets/img/avatar.png';
// this.image2=null;

// this.isSubmitted2=false;
// }



//submit img2
// submitImg2(formValue){


//   this.isSubmitted2=true;
//   if(this.formdata.valid){
//     var filePath = `Img2/${this.image2.name}_${new Date().getTime()}`;
//   const fileRef= this.storage.ref(filePath);
//     this.storage.upload(filePath,this.image2).snapshotChanges().pipe(
//     finalize(()=>{
//       fileRef.getDownloadURL().subscribe((url)=>{
//   formValue['img2']=url;
//   this.resetForm2();
//       })
//     })
//   ).subscribe();
  
//   }
// }



//all functions for image 3


  
// showpreview3(event:any){
//   if(event.target.files && event.target.files[0]){
//     const reader = new FileReader();
//     reader.onload=(e:any)=> this.img3 = e.target.result;
//     reader.readAsDataURL(event.target.files[0]);
//     this.image3 =event.target.files[0];
//   }
//   else{
//     this.img3 ='../../../assets/img/avatar.png';
//     this.image3 = null;
//   }

// }
// resetForm3(){


//   this.formdata.reset();
// this.formdata.setValue({
// img3:''
// });
// this.img3='../../../assets/img/avatar.png';
// this.image3=null;

// this.isSubmitted3=false;
// }



//submit img3
// submitImg3(formValue){


//   this.isSubmitted3=true;
//   if(this.formdata.valid){
//     var filePath = `Img3/${this.image3.name}_${new Date().getTime()}`;
//   const fileRef= this.storage.ref(filePath);
//     this.storage.upload(filePath,this.image3).snapshotChanges().pipe(
//     finalize(()=>{
//       fileRef.getDownloadURL().subscribe((url)=>{
//   formValue['img3']=url;
//   this.resetForm3();
//       })
//     })
//   ).subscribe();
  
//   }
// }

//upload video


 
// showpreview4(event:any){
//   if(event.target.files && event.target.files[0]){
//     const reader = new FileReader();
//     reader.onload=(e:any)=> this.video = e.target.result;
//     reader.readAsDataURL(event.target.files[0]);
//     this.videoclip =event.target.files[0];
//   }
//   else{
//     this.video ='../../../assets/img/avatar.png';
//     this.videoclip= null;
//   }

// }
// resetFormvideo(){


//   this.formdata.reset();
// this.formdata.setValue({
//   video:''
// });
// this.video='../../../assets/img/avatar.png';
// this.videoclip=null;

// this.isSubmitted4=false;
// }



//submit 
// submitvideo(formValue){


//   this.isSubmitted4=true;
//   if(this.formdata.valid){
//     var filePath = `video/${this.videoclip.name}_${new Date().getTime()}`;
//   const fileRef= this.storage.ref(filePath);
//     this.storage.upload(filePath,this.videoclip).snapshotChanges().pipe(
//     finalize(()=>{
//       fileRef.getDownloadURL().subscribe((url)=>{
//   formValue['video']=url;
//   this.resetFormvideo();
//       })
//     })
//   ).subscribe();
  
//   }
// }




}
