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

  exampleCol: AngularFirestoreCollection<AppStep1>;
  example: Observable<AppStep1[]>;

  firstname:string;
  lastname:string;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.exampleCol=this.afs.collection('example');
    this.example=this.exampleCol.valueChanges();
  }

  addName(){
    this.afs.collection('example').add({'firstname':this.firstname, 'lastname':this.lastname});
  }

}
