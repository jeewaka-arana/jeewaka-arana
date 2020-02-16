import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import { AppStep1 } from '../../../core/models/app-step1.model';
import { Router } from '@angular/router';

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
  number:number;
my_id:string;

  constructor(private afs: AngularFirestore,private router:Router) {
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(10);
    console.log(this.my_id);
   }

  ngOnInit() {
    this.examplesCol=this.afs.collection('example');
    this.examples=this.examplesCol.valueChanges();
  }

  addName(){
    this.afs.collection('example').add({'firstname':this.firstname, 'lastname':this.lastname, 'number':this.number});
  }

}
