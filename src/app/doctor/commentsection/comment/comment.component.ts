import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  
  constructor(private afs: AngularFirestore) { }

  title:string;
  content:string;

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }
  addPost() {
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }
}
