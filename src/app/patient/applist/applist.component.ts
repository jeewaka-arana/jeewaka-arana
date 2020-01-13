import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx'
import { observable } from 'rxjs';
import * as _ from 'lodash';
import * as firebase from 'firebase/app';
// firebase.initializeApp(environment.firebaseConfig);
import { FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.scss']
})
export class ApplistComponent implements OnInit {

  results: any;
  filteredNames: any[] = [];

  page = 1;
  pageSize = 2;

  my_id;
  patDoc: AngularFirestoreCollection;
  atDoc: AngularFirestoreDocument;
  pat: any;

  filters = {}


  constructor(private afs: AngularFirestore, private router: Router) { 
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(9);
    console.log(this.my_id);
  }

  ngOnInit() {

    // this.patDoc = this.afs.collection('Patients').doc(this.my_id).collection('Appointments');
    // console.log(this.patDoc);
    // this.atDoc = this.afs.collection('Patients').doc(this.my_id);
    // console.log(this.atDoc);
    this.afs.collection('Patients').doc(this.my_id).collection('Appointments', ref => ref.orderBy('Month')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters();
    })
  }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

}
