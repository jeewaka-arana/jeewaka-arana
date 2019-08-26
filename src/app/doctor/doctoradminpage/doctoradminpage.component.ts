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
selectedImage:any;
isSubmitted:boolean;


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
}
