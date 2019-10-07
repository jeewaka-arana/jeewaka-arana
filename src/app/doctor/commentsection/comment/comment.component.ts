  
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


interface Post {
  title: string;
  content: string;
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



  //
  clickMessage = '';

  onClickMe() {
    // this.clickMessage = 'You are my hero!';
    
  }

  //
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  AuthService: any;
  
  
  constructor(private afs: AngularFirestore) { }


  ngOnInit() {
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

    // var doctorRef=this.afs.collection('Doctors');
    
    // doctorRef.doc(id).update({'title': this.title, 'content': this.content});


    // 
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();


    //
   
  }



  // deletePost(postId) {
  //   this.afs.doc('posts/'+postId).delete();
  // }

  openCommentText(postId){
    
    console.log(postId)
    postId.isOpen = !postId.isOpen;
  }

openPost(){


  
}
}
