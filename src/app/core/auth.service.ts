import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { }

  getUserState() {
    return this.afAuth.authState;
  }

  pat_login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/patienthome']);
        }
      })
  }

  doc_login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/default']);
        }
      })
  }

  createPatient(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertPatientData(userCredential)
          .then(() => {
            this.router.navigate(['/home']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  createDoctor(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertDoctorData(userCredential)
          .then(() => {
            this.router.navigate(['/default']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }
  insertDoctorData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Doctors/${userCredential.user.uid}`).set({
      Email: this.newUser.email,
      Firstname: this.newUser.firstName,
      Lastname: this.newUser.lastName,
      PhoneNumber:this.newUser.phone,
      NIC:this.newUser.nic,
      City:this.newUser.city,
      Position:this.newUser.position,
      RegistrationNumber:this.newUser.regnumber

    })
  }

  insertPatientData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Patients/${userCredential.user.uid}`).set({
      Email: this.newUser.email,
      Firstname: this.newUser.firstName,
      Lastname: this.newUser.lastName,
      PhoneNumber:this.newUser.phone,
      NIC:this.newUser.nic,
      Country:this.newUser.country,
      City:this.newUser.city

    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
 
}