import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'; //for firestore connection
import { Patient } from './models/patient.model';
import { Doctor } from './models/doctor.model';
import {AuthService} from '../core/auth.service';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CrudService {
  

  constructor(private afs:AngularFirestore,private AuthService:AuthService) { }

  createPatient(user:Patient){
    return this.afs.collection('Patients').add(user);
  }

  createDoctor(user:Doctor){
    return this.afs.collection('Doctors').add(user);
  }
  
  updateProfile(user:Doctor){
    var id=this.AuthService.userId;

    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id).update(user);

    
  
  }

  getDoctor(){
    var id=this.AuthService.userId;
    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id)

  }
  //pass dotor comments from doctor profile page
  passData(user:Doctor)
  {
    // return this.afs.collection('Doctors').add(user);
    var id=this.AuthService.userId;

    var doctorRef=this.afs.collection('Doctors');

    doctorRef.doc(id).update(user);

    
  }


 


}
