import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection , AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { Post } from './models/post';
import { FormsModule } from "@angular/forms";
import {Article} from './models/article.model';
import {Photo} from './models/photo.model';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  articollection: AngularFirestoreCollection<Article>;
  arti:Observable<Article[]>;
  imageDetailList:AngularFireList<any>;

  
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  formData: Photo;
  
  newUser: any;
  postcollection: AngularFirestoreCollection<Photo>;
 
  authState:any=null;
  postDoc:AngularFirestoreDocument<Photo>;
  private databasepath = '/Photo';

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private afs:AngularFirestore,
    private firebase:AngularFireDatabase,
    private router: Router) { 
     this.postcollection=this.afs.collection ('Photo',ref=>ref.orderBy('published','desc'))
    
    }
getImageDetails(){
  this.imageDetailList=this.firebase.list('imageDetails');
}

insertImageDetails(imageDetails){
this.imageDetailList.push(imageDetails);
}

   authenticated():boolean{
    return this.authState!==null
  }//
  get currentUserId():String{
    return this.authenticated ? this.authState.uid:null
  }
  getPostData(id:String){
    this.postDoc= this.afs.doc<Photo>('Photo/${id}')
    return this.postDoc.valueChanges()
  }
  addarti(arti:Article){
    this.articollection.add(arti)
  }

  getPost(id:String){
    return this.afs.doc<Photo>('Photo/${id}')
  }
  create(data:Photo){
    this.postcollection.add(data)
  }
  
  delete(id:String){
    return this.getPost(id).delete()
  }
  update(id:String, formData){
    return this.getPost(id).update(formData)
  }
  getUserState() {
    return this.afAuth.authState;
  }
/*posts component*/
/*getposts(){
  return this.postcollection.snapshotChanges().map(actions=>{
    return actions.map(a=>{
      const data = a.payload.doc.data() as Post
      const id =a.payload.doc
      return{id }
    })
  })
}*/

getposts(){
  return new Promise<any>((resolve, reject) => {
    this.afs.collection('Photo').doc('VO23vtfHaiULH2bhwYvZ').collection('Photo').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}

<<<<<<< Updated upstream
  pat_login( email: string, password: string) {
=======
 //postlist component
 getpostdata(id:string){
   this.postDoc=this.afs.doc<Photo>('Photo/$id')
   return this.postDoc.valueChanges()
 }

  async pat_login( email: string, password: string) {
>>>>>>> Stashed changes
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
  adminlogin( username: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/admin']);
        }
      })
  }
 
}