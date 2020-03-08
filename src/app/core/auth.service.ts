import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DatePipe } from '@angular/common';

//session


import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentmonth=parseInt(this.datePipe.transform(new Date(),"MM" ));
currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
currentyear=parseInt(this.datePipe.transform(new Date(),"yyyy"));

private eventAuthError = new BehaviorSubject<string>("");
eventAuthError$ = this.eventAuthError.asObservable();

newUser: any;
user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,private datePipe: DatePipe) { 


 // Get the auth state, then fetch the Firestore user document or return null
 this.user$ = this.afAuth.authState.pipe(
  switchMap(user => {
      // Logged in
    if (user) {
      return this.db.doc<any>('Doctors/${user.uid}').valueChanges();
    } else {
      // Logged out
      return of(null);
    }
  })
)



      
    }

  get UserState() {
    return this.afAuth.authState;
  }

test(){

   const user = this.afAuth.auth.currentUser;

if (user) {
 return true;
} else {
  return false;
}
}
  


  async pat_login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/patienthome',userCredential.user.uid]);
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
          this.router.navigate(['/admindash',userCredential.user.uid]);
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
          this.router.navigate(['/fpage',userCredential.user.uid]);
        
          
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
            this.router.navigate(['/']);
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
      ExpYears:this.newUser.years,
      Specialist:this.newUser.specialist,
      Userid:userCredential.user.uid,
      Day:this.currentday,
      Month:this.currentmonth,
      Year:this.currentyear

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
      Userid:userCredential.user.uid,
      Day:this.currentday,
      Month:this.currentmonth,
      Year:this.currentyear
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
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

 