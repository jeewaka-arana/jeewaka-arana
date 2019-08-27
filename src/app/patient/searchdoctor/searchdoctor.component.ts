import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Doctor } from 'app/core/models/doctor.model';

@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.scss']
})
export class SearchdoctorComponent implements OnInit {

   
  searchterm: string;
 

  startAt = new Subject();
  endAt = new Subject();

  examples;
  start;
  end;

 

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) =>{
      this.firequery(value[0], value[1]).subscribe((firstnames) => {
        this.examples=firstnames;
      })
    })
  }

  search($event){
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
  }
  firequery(start, end){
    return this.afs.collection('example', ref => ref.limit(20).orderBy('firstname').startAt(start).endAt(end)).valueChanges();
  }
  
  
  }



