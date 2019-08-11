import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'; //for firestore connection
import { Patient } from './models/patient.model';
import { Doctor } from './models/doctor.model';
import {Doctoradminpage} from './models/doctoradminpage.model';

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
  
  updateProfile(user:Doctoradminpage){
return this.afs.collection('test').add(user);
  }


}
