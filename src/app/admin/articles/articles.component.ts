import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs/Observable';
import{MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBar} from "@angular/material";
import {AngularFireStorage} from '@angular/fire/storage'
import {AngularFireUploadTask} from '@angular/fire/storage'



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
 /* arti:Article={
    newArticle:"",
    img:'',
    title:'',
    description:'',
  }*/
  /*add photon*/
  Title:String;
  Content:String;
  title:String;
  description:String;
  Img:String=null;
  buttonText:String="create Post";
  uploadPercent: Observable<number>;
  downloadURL: Observable<String>;

  constructor(private afs: AngularFirestore,private auth:AuthService,private storage:AngularFireStorage) { 

  }

  ngOnInit() {
    //this.resetForm();

  }
  onSubmit(){
    /*if(this.arti.title!=' '&& this.arti.description!=' '){
this.auth.addarti(this.arti);*/
if(this.title!='' && this.description!=''){
this.afs.collection('Article').add({'title': this.title, 'description': this.description});
return alert("Data pushed")
}
else{
  return alert("data is empty")
}
/*this.arti.img='';
     this.arti.title='';
     this.arti.newArticle='';
     this.arti.description='';
       addIssue(){
    this.afs.collection('Issues').add({'name': this.name, 'email': this.email, 'issue': this.issue});
  }*/
    
  }
  /*resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.auth.frmData={
     newArticle:"",
     img:'',
     title:'',
     description:'',
    
    }
   
  }
   createpost(){
    const data={
      author:this.auth.authState.displayName||this.auth.authState.email,
      authorId:this.auth.currentUserId,
      Content:this.Content,
      Img: this.Img,
      Published: new Date(),
      Title:this.Title
    }
    this.auth.create(data);  
    this.Title="";
    this.Content="";
    this.buttonText="Post Created";
    setTimeout(()=>(this.buttonText="Create Post",3000))
  }

  onSubmit(form:NgForm){
    let data=Object.assign({},form.value);
    delete data.id;
    if(form.value.title==null)
    this.afs.collection('Article').add(data);
    else
    this.afs.doc('Article/'+form.value.title).update(data);
    this.resetForm(form);
  }
  uploadImage(event){
    const file=event.target.files[0]
    const path='Photo/${file.name}'
    if(file.type.split('/')[0]!=='image'){
      return alert('only image files')
    }
    else{
      const task=this.storage.upload(path,file)
      //this.downloadURL=task.
      this.uploadPercent=task.percentageChanges()
      console.log('image uploaded!')
      this.downloadURL.subscribe(url=>this.Img=url)
    }
  }*/

  }
