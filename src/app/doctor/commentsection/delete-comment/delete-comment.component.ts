import { Component, OnInit, Input } from '@angular/core';
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
@Input() id:string;
  postsCol: AngularFirestoreCollection;
  //posts: any;
  post: Observable<any>;

  title:string;
  content:string;

  commentElements = ['content', 'title',' '];
  
  // post: Observable<Post>;

  //comments
  commentCol: AngularFirestoreCollection<Post>;
  comment: Observable<Post[]>;
  comment$:any;
  
  constructor(private  afs: AngularFirestore) { 
    this.postsCol = this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('Posts');
    this.post = this.postsCol.valueChanges();
  }

  ngOnInit() {
  

    // this.posts = this.postsCol.snapshotChanges()
    // .map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;
       
    //     return { id, data };
    //   })
    // })
  }



  
  deletePost(postId) {

    

  //   this.afs.collection('Doctors').doc(this.id).collection('Posts').doc('Posts/'+postId).delete();

   }
}
