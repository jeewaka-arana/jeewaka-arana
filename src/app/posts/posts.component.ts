import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { AuthService } from 'app/core/auth.service';
import { Post } from 'app/core/models/post';
import {FormGroup,FormControl} from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireStorageReference,


} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  files: File[] = [];
  ref: AngularFireStorageReference;
imgSrc:String;
selectedImage:any;
uploadPercent: Observable<number>;
downloadURL: Observable<string>;
isSubmitted:boolean;
  formTemplate=new FormGroup({
  caption:new FormControl(''),//,validators.required
  category:new FormControl(''),
  imageURl:new FormControl('')
})
  constructor(private afs: AuthService, private storage:AngularFireStorage,private db: AngularFirestore) {

   }

  ngOnInit() {
    this.afs.getImageDetails();
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
  this.imgSrc='asstes/img/uim.png';
  this.selectedImage=null;
}
}
onSubmit(formValue){
  this.afs.getImageDetails();
  this.isSubmitted=true;
  if(this.formTemplate.valid){
    var filepath='/articles/' + Date.now() + '-' + this.files[0] ;
   // var filepath=`${formValue.category}/${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`  ;
   
    //''/${Date.now()}_$this.file.name}
    // const path = `Pofilepictures/${Date.now()}_${this.file.name}`;
    this.ref = this.storage.ref(filepath);
    this.storage.upload(filepath, this.selectedImage).snapshotChanges().pipe(
      finalize(async () => {
        this.downloadURL = await this.ref.getDownloadURL().toPromise();
        this.db.collection('Article').add({
         title: '',
         category:'',
         description: '',
          /*time: Date.now(),
          date: new Date(),*/
          Doctorname:'',
       
          imageUrl: this.downloadURL
        });

      })
    ).subscribe();
    this.resetForm();
     /* finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          
          formValue['imageUrl']=url; 
          
          this.afs.insertImageDetails(formValue);
         
          this.resetForm();
        })
      })
    ).subscribe();  */
  }
}
/*onsubmit(event) {

    const file = event.target.files[0];
    const filePath = '/articles/' + Date.now() + '-' + this.files[0];
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.ref = this.storage.ref(filePath);
    this.uploadPercent = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(
        finalize(async () => {
          this.downloadURL = await this.ref.getDownloadURL().toPromise();
          this.db.collection('Article').add({
           title: '',
           
           description: '',
            /*time: Date.now(),
            date: new Date(),*/
           
         
           /* imageUrl: this.downloadURL
          });
        })
      )
      .subscribe();
  }*/
get formConrols(){
  return this.formTemplate['controls']
}

resetForm(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    caption:'',
    imageURl:'',
    category:'Animal'
  });
  this.imgSrc='/asstes/img/uim.jpg';
 this.isSubmitted=false;
 this.selectedImage=null;
}
}
