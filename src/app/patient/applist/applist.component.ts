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
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.scss']
})
export class ApplistComponent implements OnInit {

  currentmonth=parseInt(this.datePipe.transform(new Date(),"MM"));
  currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
  currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));

  results: any;
  filteredNames: any[] = [];
  applist=[];

  page = 1;
  pageSize = 4;

  my_id;
  patDoc: AngularFirestoreCollection;
  atDoc: AngularFirestoreDocument;
  pat: any;
  
  filters = {}


  mineDoc:Observable<any>;

  constructor(private afs: AngularFirestore, private router: Router, private datePipe: DatePipe) { 
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(9);
    console.log(this.my_id);



 this.afs.collection('Patients').doc(this.my_id).collection('Appointments', ref => ref.orderBy('Day').where('Day',">=",this.currentday)).valueChanges().subscribe(results => {
      this.results = results;
      console.log(results);
      console.log("hi");
      results.forEach(element => {
       if(element.Month >= this.currentmonth)
       {
         if(element.Year >= this.currentyear){
          this.applist.push(element);
         }
       }
      });
      this.applyFilters();
    
    })
    console.log(this.applist);
  }

  ngOnInit() {
    this.afs.collection('Patients').doc(this.my_id).collection('Appointments', ref => ref.orderBy('Month')).valueChanges().subscribe(results => {
      this.results = results;
      console.log(this.results);
      this.applyFilters();
    })
  }

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

}
