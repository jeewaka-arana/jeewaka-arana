import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; //for firestore connection
import { Patient } from './models/patient.model';
import { Doctor } from './models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  constructor(private afs:AngularFirestore) { }

  createPatient(user:Patient){
    return this.afs.collection('Patients').add(user);
  }

  createDoctor(user:Doctor){
    return this.afs.collection('Doctors').add(user);
  }
  
  updateProfile(user:Doctor){

    // var doctorRef=this.afs.collection('Doctors');
    // doctorRef.doc("6DiuPaU010wWROp2CuwP").update(user);

    return this.afs.collection('Doctors').add(user);
    
  }


//update doctor view page according to the doctor admin page

 


}
