  
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import{DatePipe} from '@angular/common';
import{CrudService} from 'app/core/crud.service';
import { Doctor } from '../../../core/models/doctor.model';
import {AuthService} from '../../../core/auth.service';
import { Router } from '@angular/router';

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
  @Input() id:string;


  today: number = Date.now();

  postsCol: AngularFirestoreCollection<Post>;
  
  post: Observable<Post[]>;

  title:string;
  content:string;
 


  commentCol: AngularFirestoreCollection<Post>;
   comment: Observable<Post[]>;
   comment$:any;
   posts: any;
  
 
 

  
   my_id:string;
  constructor(private db: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService,private  afs: AngularFirestore,private datePipe: DatePipe, private router:Router) {
    // this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(12);

   }


  ngOnInit() {




    this.postsCol = this.afs.collection('Doctors').doc(this.id).collection('Posts');
    this.post = this.postsCol.valueChanges();
  
    // this.posts = this.postsCol.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Post;
    //       const id = a.payload.doc.id;
    //       return { id, data };
    //     })
    //   })
  }
  

  addPost() {

    
     this.afs.collection('Doctors').doc(this.id).collection('Posts').add({'title': this.title, 'content': this.content});
  }

  // getPost(postId) {
  //   this.commentCol = this.afs.collection('Doctors').doc(this.my_id).collection('Posts');
  //   this.comment = this.commentCol.valueChanges();


  //   //
   
  // }



  // openCommentText(postId){
    
  //   console.log(postId)
  //   postId.isOpen = !postId.isOpen;
  // }


}
