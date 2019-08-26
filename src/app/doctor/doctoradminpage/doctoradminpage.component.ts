import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import {FormGroup,FormControl} from '@angular/forms';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-doctoradminpage',
  templateUrl: './doctoradminpage.component.html',
  styleUrls: ['./doctoradminpage.component.scss']
})
export class DoctoradminpageComponent implements OnInit {
img : string;
img1:string;
img2:string;
img3:string;
video:string;
selectedImage:any;
image1:any;
image2:any;
image3:any;
videoclip:any;
isSubmitted:boolean;
isSubmitted1:boolean;
isSubmitted2:boolean;
isSubmitted3:boolean;
isSubmitted4:boolean;


formdata=new FormGroup({ 
  profilepicurl:new FormControl(''),
  Specialist:new FormControl(''),
 
  Address:new FormControl(''),
  Phone:new FormControl(''),
 
  dateTime:new FormControl(''),
  note:new FormControl(''),
  img1:new FormControl(''),
  img2:new FormControl(''),

  img3:new FormControl(''),

  video:new FormControl(''),
article:new FormControl(''),


 });

  constructor(private CrudService:CrudService,private router:Router,private storage:AngularFireStorage) { }

  ngOnInit() {
    window.document.body.style.backgroundImage='url("../../../assets/img/Ayurveda-101.jpeg")';
    this.formdata;
    this.resetForm();
    this.resetForm1();
    this.resetForm2();
    this.resetForm3();
   this.resetFormvideo();
  }


  savevalue(data) {
    this.CrudService.updateProfile(data);
   
  }

  showpreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage =event.target.files[0];
    }
    else{
      this.img ='../../../assets/img/avatar.png';
      this.selectedImage = null;
    }
 
  }

  onSubmit(formValue){
this.isSubmitted=true;
if(this.formdata.valid){
  var filePath = `ProfilePictures/${this.selectedImage.name}_${new Date().getTime()}`;
const fileRef= this.storage.ref(filePath);
  this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
  finalize(()=>{
    fileRef.getDownloadURL().subscribe((url)=>{
formValue['profilepicurl']=url;
this.resetForm();
    })
  })
).subscribe();


}



  }


  resetForm(){


    this.formdata.reset();
this.formdata.setValue({
  profilepicurl:''
});
this.img='../../../assets/img/avatar.png';
this.selectedImage=null;

this.isSubmitted=false;
  }







  //newly added functions for 3 photo upload


  //


//image1 all function
  showpreview1(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.img1 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.image1 =event.target.files[0];
    }
    else{
      this.img1 ='../../../assets/img/avatar.png';
      this.image1 = null;
    }
 
  }
  resetForm1(){


    this.formdata.reset();
this.formdata.setValue({
  img1:''
});
this.img1='../../../assets/img/avatar.png';
this.image1=null;

this.isSubmitted1=false;
  }









//submit img1 pictures to firebase
submitImg1(formValue){


  this.isSubmitted1=true;
  if(this.formdata.valid){
    var filePath = `Img1/${this.image1.name}_${new Date().getTime()}`;
  const fileRef= this.storage.ref(filePath);
    this.storage.upload(filePath,this.image1).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
  formValue['img1']=url;
  this.resetForm1();
      })
    })
  ).subscribe();
  
  }
}
//end of image1 function


//image 2 all function

showpreview2(event:any){
  if(event.target.files && event.target.files[0]){
    const reader = new FileReader();
    reader.onload=(e:any)=> this.img2 = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.image2 =event.target.files[0];
  }
  else{
    this.img2 ='../../../assets/img/avatar.png';
    this.image2 = null;
  }

}
resetForm2(){


  this.formdata.reset();
this.formdata.setValue({
img2:''
});
this.img2='../../../assets/img/avatar.png';
this.image2=null;

this.isSubmitted2=false;
}



//submit img2
submitImg2(formValue){


  this.isSubmitted2=true;
  if(this.formdata.valid){
    var filePath = `Img2/${this.image2.name}_${new Date().getTime()}`;
  const fileRef= this.storage.ref(filePath);
    this.storage.upload(filePath,this.image2).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
  formValue['img2']=url;
  this.resetForm2();
      })
    })
  ).subscribe();
  
  }
}



//all functions for image 3


  
showpreview3(event:any){
  if(event.target.files && event.target.files[0]){
    const reader = new FileReader();
    reader.onload=(e:any)=> this.img3 = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.image3 =event.target.files[0];
  }
  else{
    this.img3 ='../../../assets/img/avatar.png';
    this.image3 = null;
  }

}
resetForm3(){


  this.formdata.reset();
this.formdata.setValue({
img3:''
});
this.img3='../../../assets/img/avatar.png';
this.image3=null;

this.isSubmitted3=false;
}



//submit img3
submitImg3(formValue){


  this.isSubmitted3=true;
  if(this.formdata.valid){
    var filePath = `Img3/${this.image3.name}_${new Date().getTime()}`;
  const fileRef= this.storage.ref(filePath);
    this.storage.upload(filePath,this.image3).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
  formValue['img3']=url;
  this.resetForm3();
      })
    })
  ).subscribe();
  
  }
}

//upload video


resetFormvideo(){


  this.formdata.reset();
this.formdata.setValue({
video:''
});
this.video='../../../assets/img/avatar.png';
this.videoclip=null;

this.isSubmitted4=false;
}




submitvideo(formValue){


  this.isSubmitted4=true;
  if(this.formdata.valid){
    var filePath = `Video/${this.videoclip.name}_${new Date().getTime()}`;
  const fileRef= this.storage.ref(filePath);
    this.storage.upload(filePath,this.videoclip).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
  formValue['video']=url;
  this.resetFormvideo();
      })
    })
  ).subscribe();
  
  }

  




}




}
