import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import { AppStep1 } from '../../../core/models/app-step1.model';

interface example {
  firstname : string;
  lastname : string;
}

@Component({
  selector: 'app-app-step1',
  templateUrl: './app-step1.component.html',
  styleUrls: ['./app-step1.component.scss']
})
export class AppStep1Component implements OnInit {

  examplesCol: AngularFirestoreCollection<AppStep1>;
  examples: Observable<AppStep1[]>;

  firstname:string;
  lastname:string;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.examplesCol=this.afs.collection('example');
    this.examples=this.examplesCol.valueChanges();
  }

  addName(){
    this.afs.collection('example').add({'firstname':this.firstname, 'lastname':this.lastname});
  }

}
