import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireDatabase } from '@angular/fire/database';
import { Searchdoctor } from './models/searchdoctor.model';
import { from, Observable } from 'rxjs';

export interface Doctors {
  name: string;
  Age: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchdoctorService {




  DoctorRef: AngularFirestoreCollection<Doctors>;
  Doctors: Observable<Doctors[]>;
  Doctor$:any;

  constructor(private afs:AngularFirestore) {

this.DoctorRef=this.afs.collection('Doctors');


   }


  
  
}
