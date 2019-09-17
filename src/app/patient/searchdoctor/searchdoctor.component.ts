import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';
import * as _ from 'lodash';

// interface example {
//   // firstname : string;
//   // lastname : string;
//   Firstname:string;
//   Lastname:string;
//   Email:string;
//   PhoneNumber:number;
//   NIC:string;
//   City:string;
//   Position:string;
//   RegistrationNumber:string;
    
// }

@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.scss']
})
export class SearchdoctorComponent implements OnInit {

  results: any;
  filteredNames: any;

  
  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  expyear: number;


  filters ={}

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.afs.collection('Doctors',ref => ref.limit(4).orderBy('Lastname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters()
    })
    }
  
  // firequery(){
  //     return this.afs.collection('Doctors', ref => ref.orderBy('expyear'));
  //   }
  // loadByName($event){
  //   this.examplesCol=this.afs.collection ( 'Doctors', ref => ref.orderBy('expyear'))
  // }

  private applyFilters(){
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string){
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterArea(property: string, rule: string){
    if(!rule) this.removeFilter(property)
    else{
      this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
      this.applyFilters()
    }
  }

  removeFilter(property: string){
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  // searchterm: string;

  // startAt = new Subject();
  // endAt = new Subject();

  // names;
  // start;
  // end;

  // startobs = this.startAt.asObservable();
  // endobs = this.endAt.asObservable();

  // examplesCol: AngularFirestoreCollection<Doctor>;
  // examples: Observable<Doctor[]>;

  // firstname:string;
  // lastname:string;
  // number:number;
  
  
  // constructor(private afs: AngularFirestore) { }

  // ngOnInit() {
    

    // this.examplesCol=this.afs.collection('Doctors', ref => ref.orderBy('Firstname'));
    // this.examples=this.examplesCol.valueChanges();
    // this.examplesCol=this.afs.collection('example', ref => ref.orderBy('number').where("number", "==", 2));
    // this.examplesCol=this.afs.collection('example', ref => ref.where("number", ">", 0).where("number", "<=", 3));
  
  //}

  // search($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs, this.endobs).subscribe((value) =>{
  //     this.firequery(value[0], value[1]).subscribe((firstnames) => {
  //       this.names=firstnames;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }
  // searchlocation($event){
  //   let q = $event.target.value;
  //   Observable.combineLatest(this.startobs, this.endobs).subscribe((value) =>{
  //     this.firequery2(value[0], value[1]).subscribe((city) => {
  //       this.names=city;
  //     })
  //   })
  //   this.startAt.next(q);
  //   this.endAt.next(q + "\uf8ff");
  // }
  // firequery(start, end){
  //   return this.afs.collection('Doctors', ref => ref.limit(50).orderBy('Firstname').startAt(start).endAt(end)).valueChanges();
  // }
  // firequery2(start, end){
  //   return this.afs.collection('Doctors', ref => ref.limit(50).orderBy('City').startAt(start).endAt(end)).valueChanges();
  // }
  
  }
  



