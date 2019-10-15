  
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import{DatePipe} from '@angular/common';
import{CrudService} from 'app/core/crud.service';
import { Doctor } from '../../../core/models/doctor.model';
import {AuthService} from '../../../core/auth.service';

interface Post {
  title: string;
  content: string;
  todayTime:string;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
 

})
export class CommentComponent implements OnInit {
  today: number = Date.now();

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;
 


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  

  
  
  constructor(private db: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService,private  afs: AngularFirestore,private datePipe: DatePipe) {
   
   }


  ngOnInit() {

//

// var medium = this.datePipe.transform(new Date(),"MMM d, y, h:mm:ss a");
// console.log(medium); //output - Feb 14, 2019, 3:45:06 PM
//

    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }
  

  addPost() {

    // var id=this.AuthService.userId;

    // var doctorRef=this.afs.collection('posts');
    
    // doctorRef.doc(id).set({'title': this.title, 'content': this.content});



    // 
     this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();


    //
   
  }



  // openCommentText(postId){
    
  //   console.log(postId)
  //   postId.isOpen = !postId.isOpen;
  // }


}
