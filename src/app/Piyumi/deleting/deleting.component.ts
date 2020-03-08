import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Test{

  name:string;
  age:string;
}

export interface T extends Test{id:string}
@Component({
  selector: 'app-deleting',
  templateUrl: './deleting.component.html',
  styleUrls: ['./deleting.component.scss']
})
export class DeletingComponent implements OnInit {

  postsCol:AngularFirestoreCollection< Test>; //all  documnet collection.we need to create an interface

  posts:Observable< Test[]>;//like a pointer

 

  constructor(private  afs: AngularFirestore ) {

   }

  ngOnInit() {
    this.postsCol=this.afs.collection('P-viewing');
    // if want to get the document id
 this.posts=this.postsCol.snapshotChanges().pipe(
  map(actions => actions.map(a=>{
    const id = a.payload.doc.id;
    const data = a.payload.doc.data() as Test;//add main interface name


    return {id,...data};
  }))
);

//  for only retriving can use valuechanges
//if need docId also then snapshotchanges

  }

  // deleteDoctor(id:any,data:any)
  delete(id:any)
  {
    if (confirm("Are you sure to delete this record?")) {
    
      this.afs.collection('P-viewing').doc(id).delete();
    }

  }
}
