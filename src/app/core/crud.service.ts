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
   mine:any;

  constructor(private afs:AngularFirestore,private AuthService:AuthService) { }

  createPatient(user:Patient){
    return this.afs.collection('Patients').add(user);
  }

  createDoctor(user:Doctor){
    return this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DoctorsConf').add(user) 
  }
    
  
  updateProfile(user:Doctor){
    var id=this.AuthService.userId;
    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id).update(user);
  }

  updateForm(userdoc){
    var id=this.AuthService.userId;
    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id).update(userdoc);
  }
  updateNote(user){
    var id=this.AuthService.userId;
    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id).update(user);
  }
  getDoctor(){
    var id=this.AuthService.userId;
    var doctorRef=this.afs.collection('Doctors');
    doctorRef.doc(id)

  }



  passDoctorIssues(user:Doctor)
  {
    
    return this.afs.collection('DoctorIssues').add(user);

}




//update doctor view page according to the doctor admin page

getPeople(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}






getDoctors(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('Doctors').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}
upload(event) {
 /* const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(event.target.files[0]);
  this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  this.uploadProgress = this.task.percentageChanges();
  this.downloadURL = this.task.downloadURL();*/
  return this.afs.collection('Article').add(event);
}




}
