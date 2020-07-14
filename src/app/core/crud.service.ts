import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; //for firestore connection
import { Patient } from './models/patient.model';
import { Doctor } from './models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

<<<<<<< Updated upstream
  constructor(private afs:AngularFirestore) { }

=======
  constructor(private afs:AngularFirestore,private AuthService:AuthService) { }
getpeop
>>>>>>> Stashed changes
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

  
 
<<<<<<< Updated upstream
//update doctor view page according to the doctor admin page

getPeople(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('Doctors').snapshotChanges()
=======

//doclist

getPeople(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors', ref => ref.where('state', '==', 0)).snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}

//docaccept
getDoctors(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('admin').doc('VO23vtfHaiULH2bhwYvZ').collection('Doctors', ref => ref.where('state', '==', 1)).snapshotChanges()
>>>>>>> Stashed changes
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
