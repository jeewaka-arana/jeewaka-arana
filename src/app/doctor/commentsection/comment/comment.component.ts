  
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  x:any;

  today: number = Date.now();

  postsCol: AngularFirestoreCollection<Post>;
  
  post: Observable<Post[]>;

  title:string;
  content:string;
 


  commentCol: AngularFirestoreCollection<Post>;
   comment: Observable<Post[]>;
   comment$:any;
   posts: any;
  
 
 
currentmonth=parseInt(this.datePipe.transform(new Date(),"MM" ));
currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));

 form:FormGroup; 
   my_id:string;
  submitted: boolean;
  constructor(private db: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService,private  afs: AngularFirestore,private datePipe: DatePipe, private router:Router,private fb:FormBuilder) {
    // this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(12);

   }


  ngOnInit() {




    this.postsCol = this.afs.collection('Doctors').doc(this.id).collection('Posts');
    this.post = this.postsCol.valueChanges();

    // this.post.subscribe((data) => { this.x = data.length });
    
    // console.log(this.x);
  
    // this.posts = this.postsCol.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Post;
    //       const id = a.payload.doc.id;
    //       return { id, data };
    //     })
    //   })


this.form=this.fb.group({
  title: ['', Validators.required],
    content: ['', Validators.required],
})
 




  }
  
  get f() { return this.form.controls; }

  addPost(data:any) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    
     this.afs.collection('Doctors').doc(this.id).collection('Posts').add({'title': data.title, 'content': data.content,'Year':this.currentyear,'Month':this.currentmonth,'Day':this.currentday});
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
