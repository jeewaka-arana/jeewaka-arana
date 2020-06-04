import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Test{

  name:string;
  age:string;
}



@Component({
  selector: 'app-retriving',
  templateUrl: './retriving.component.html',
  styleUrls: ['./retriving.component.scss']
})
export class RetrivingComponent implements OnInit {

  postsCol:AngularFirestoreCollection< Test>; //all  documnet collection.we need to create an interface

  posts:Observable< Test[]>;//like a pointer

 

  constructor(private  afs: AngularFirestore ) {

   }

  ngOnInit() {
    this.postsCol=this.afs.collection('P-viewing');
 this.posts=this.postsCol.valueChanges();
  }


}
