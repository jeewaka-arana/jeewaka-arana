import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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


 

  async pat_login( email: string, password: string) {
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

  async admin_login( email: string, password: string) {
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

 async doc_login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/doctoradmin']);
        
          
        }
      })
  }

  createPatient(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertPatientData(userCredential)
          .then(() => {
            this.router.navigate(['/patienthome']);
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
            this.SendVerificationMail();
            this.router.navigate(['/default']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertDoctorData(userCredential: firebase.auth.UserCredential) {
    if(!this.newUser.regnumber){
      this.newUser.regnumber=null;
    }
    return this.db.doc(`Doctors/${userCredential.user.uid}`).set({
      Email: this.newUser.email,
      Firstname: this.newUser.firstName,
      Lastname: this.newUser.lastName,
      PhoneNumber:this.newUser.phone,
      NIC:this.newUser.nic,
      City:this.newUser.city,
      Position:this.newUser.position,
      RegistrationNumber:this.newUser.regnumber,
      ExperiencedYears:this.newUser.years,
      Userid:userCredential.user.uid,
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
      City:this.newUser.city,
      Userid:userCredential.user.uid
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }


 get userId() {
    return this.afAuth.auth.currentUser.uid;
  }
 
  CurrentUser(userCredential: firebase.auth.UserCredential){
    return userCredential.user.uid;
  }
 

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      // this.router.navigate(['<!-- enter your route name here -->']);
    })
  }
}

 