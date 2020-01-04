import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebasetest',
  templateUrl: './firebasetest.component.html',
  styleUrls: ['./firebasetest.component.scss']
})
export class FirebasetestComponent implements OnInit {
  QueryCol:AngularFirestoreCollection;
  Query:Observable<any>;
  p:any;
  
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
  }


  test(data:any){
    console.log(data);
    this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment',ref=>ref.where('year','==',data));
    console.log(this.QueryCol)
    this.Query=this.QueryCol.valueChanges();


  // this.Query.subscribe((data)=>{this.p = data.length});

  }
}
