import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Post{
  title:string;
  content:string;
}

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  constructor(private  afs: AngularFirestore) { }

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
//
getPost(postId) {
  this.postDoc = this.afs.doc('posts/'+postId);
  this.post = this.postDoc.valueChanges();
}
  
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
   }
}
