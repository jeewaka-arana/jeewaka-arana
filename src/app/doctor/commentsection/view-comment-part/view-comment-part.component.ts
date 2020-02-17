  
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
  selector: 'app-view-comment-part',
  templateUrl: './view-comment-part.component.html',
  styleUrls: ['./view-comment-part.component.scss']
})
export class ViewCommentPartComponent implements OnInit {
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
  
 
 
// currentmonth=parseInt(this.datePipe.transform(new Date(),"MM" ));
// currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
// currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));

  
   my_id:string;
  constructor(private db: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService,private  afs: AngularFirestore,private datePipe: DatePipe, private router:Router) {
   

   }


  ngOnInit() {




    this.postsCol = this.afs.collection('Doctors').doc(this.id).collection('Posts');
    this.post = this.postsCol.valueChanges();

    


 




  }
  

  // addPost() {

    
  //    this.afs.collection('Doctors').doc(this.id).collection('Posts').add({'title': this.title, 'content': this.content,'Year':this.currentyear,'Month':this.currentmonth,'Day':this.currentday});
  // }

  // getPost(postId) {
  //   this.commentCol = this.afs.collection('Doctors').doc(this.my_id).collection('Posts');
  //   this.comment = this.commentCol.valueChanges();


  //   //
   
  // }




}
