import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';

interface Post {
  Specialist:string;
  
}

@Component({
  selector: 'app-selectbydisease',
  templateUrl: './selectbydisease.component.html',
  styleUrls: ['./selectbydisease.component.scss']
})
export class SelectbydiseaseComponent implements OnInit {

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
