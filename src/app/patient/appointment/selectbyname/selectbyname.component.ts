import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';

interface Post {
  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  expyear: number;
}

@Component({
  selector: 'app-selectbyname',
  templateUrl: './selectbyname.component.html',
  styleUrls: ['./selectbyname.component.scss']
})
export class SelectbynameComponent implements OnInit {

  results: any[] = [];
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('Doctors',ref => ref.limit(4)).valueChanges().subscribe(results => {
      this.results = results;
      
    })
  }

}
