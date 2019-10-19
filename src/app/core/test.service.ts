import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from 'firebase';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  user$: Observable<firebase.User>;
  error: string;
  constructor( public afAuth: AngularFireAuth, public router: Router, private afs: AngularFirestore) {
      this.user$ = afAuth.authState;
  }
  async  login(email: string, password: string) {

      try {
          await this.afAuth.auth.signInWithEmailAndPassword(email, password)
          this.router.navigate(['/test2']);
      } catch (e) {
          alert("Error!" + e.message);
      }
  
  }
  async addstudent(email: string, password: string) {
      try{
          let userCred = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          await this.afs.firestore.collection("users").doc(userCred.user.uid).set({
              email: email,
              password: password
          });
              this.router.navigate(['/']);
      } catch (e) {
          alert("Error!" + e.message);
      }
  }

  async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('users');
      this.router.navigate(['/']);
  }
}
