import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable'
import {Post} from 'app/core/models/post'
import { AuthService } from 'app/core/auth.service';
import {ActivatedRoute} from '@angular/router';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
 imageList:any[];
 rowIndexArray:any[];
 results: any[];
  constructor(private afs: AuthService ,private database: AngularFirestore ) {//,private database: AngularFirestore

   }

  ngOnInit() {
    /*this.afs.collection("Article",ref => ref.limit(8)).valueChanges().subscribe(results => {
    this.results = results;*/
    /*this.database.collection("imageDetailList").snapshotChanges().subscribe(
    list=>{
      this.imageList = list.map(item=>{return item.payload.val();})
      this.rowIndexArray= Array.from(Array(Math.ceil(this.imageList.length/3)).keys());
    }
  );*/ 
  //this.afs.getImageDetails();
  this.database.collection("imageDetailList").valueChanges().subscribe(
    imageList => {
      this.imageList = imageList.map(item=>{return item;})
      this.rowIndexArray= Array.from(Array(Math.ceil(this.imageList.length/3)).keys());
   } );
 /* this.afs.imageDetailList.snapshotChanges().subscribe(
    list=>{
      this.imageList = list.map(item=>{return item.payload.val();})
      this.rowIndexArray= Array.from(Array(Math.ceil(this.imageList.length/3)).keys());
    }
  );*/
  }



}
