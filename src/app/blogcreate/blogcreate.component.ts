import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { AuthService } from 'app/core/auth.service';

import { Post } from 'app/core/models/post';
import {FormGroup,FormControl,Validators} from '@angular/forms';

import {
  AngularFireStorage,
  AngularFireStorageReference,


} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-blogcreate',
  templateUrl: './blogcreate.component.html',
  styleUrls: ['./blogcreate.component.scss']
})
export class BlogcreateComponent implements OnInit {
  title:String;
  description:String;
  category:String;
  Doctorname:String;
  files: File[] = [];
  ref: AngularFireStorageReference;
  imgSrc:String;
  selectedImage:any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  isSubmitted:boolean;


  formTemplate=new FormGroup({
  title:new FormControl('',Validators.required),
  description:new FormControl(''),
  selectAs:new FormControl('',Validators.required),
  category:new FormControl(''),
  imageURl:new FormControl(''),
 
})
  constructor(private afs: AuthService, private storage:AngularFireStorage,private db: AngularFirestore) {

   }

   ngOnInit() {
    
    this.resetForm();
    
   
  }
showPreview(event:any){
if(event.target.files &&event.target.files[0]){
  const reader=new FileReader();
  reader.onload =(e:any)=>this.imgSrc=e.target.result;
  reader.readAsDataURL(event.target.files[0]);
  this.selectedImage=event.target.files[0];
  }
else{
  this.imgSrc='assets/img/uim.jpg';
  this.selectedImage=null;
}
}
onSubmit(formValue){

  this.isSubmitted=true;
  if(this.formTemplate.valid){
    var filepath='/articles/' + Date.now() + '-' + this.files[0] ;
    this.ref = this.storage.ref(filepath);
    this.storage.upload(filepath, this.selectedImage).snapshotChanges().pipe(
      finalize(async () => {
        this.downloadURL = await this.ref.getDownloadURL().toPromise();
        this.db.collection('Article').add({
         title:formValue.title,
         description: formValue.description,
          date: new Date(),
          selectAs:formValue.selectAs,
          category:formValue.category,
          
          imageUrl: this.downloadURL
        });

      })
    ).subscribe();
    this.resetForm();
    
  }
}

get formConrols(){
  return this.formTemplate['controls']
}

resetForm(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    title:'',
    imageURl:'',
    selectAs:'Article',
    category:'',
    description:'',   
  });
  this.imgSrc='/assets/img/uim.jpg';
  this.isSubmitted=false;
  this.selectedImage=null;
}
}
