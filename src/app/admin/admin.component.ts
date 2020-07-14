import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { CrudService } from 'app/core/crud.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
=======
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireStorageReference,


} from '@angular/fire/storage';

import { UploadFileService } from '../core/upload-file.service';
import { AuthService } from 'app/core/auth.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { finalize, tap } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Location } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { createProviderInstance } from '@angular/core/src/view/provider';
import { Article } from 'app/core/models/article.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

>>>>>>> Stashed changes

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],

})
export class AdminComponent implements OnInit {
<<<<<<< Updated upstream

  date: String;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private afStorage: CrudService, private auth: AngularFireStorage) {
    setInterval(() => {
      let currentDate = new Date();
      this.date = currentDate.toDateString() + '  ' + currentDate.toLocaleTimeString();
    }, 1000);
=======
  isCollapsed: boolean = true;
  fileUploads: any[];
  results: any[] = [];
  new:String;
 // postsCol: AngularFirestoreCollection<Post>;
 // posts: Observable<Post[]>;
  authError: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  ref: AngularFireStorageReference;
  files: File[] = [];
  file: Observable<any>;
  tit:String;
  descript:String;

  private artiDoc:AngularFirestoreDocument<Article>;
  art: Observable<Article>;
 
  closeResult: string;

  constructor(private afs: AngularFirestore, private location: Location,private afStorage: AngularFireStorage,private fb: FormBuilder, private modalService: NgbModal,private uploadService: UploadFileService,private auth:AuthService) { 
  
    
    
     }

  ngOnInit() {
    //this.afs.collection('Article',ref => ref.limit(2)).valueChanges().subscribe(results => {
      //this.results = results;
      
  //  })
  //viewing articles
  this.afs.collection("Article",ref => ref.limit(8)).valueChanges().subscribe(results => {
    this.results = results;
  
  })
  //end of viewing articles
 
   this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
    
>>>>>>> Stashed changes
  }
  //return this.getPost(id).update(formData)
  Createdoc(id:number){
    //where("capital", "==", true)
  this.afs.collection('Article').doc().update({'title':this.tit,'description':this.descript
  }).then(x=>{
    return alert("Doctor registered")
      setTimeout(()=>(1000))

  }).catch(error=>{
    console.log("This is the error of updating query of changing state of doctor"+error);
})

<<<<<<< Updated upstream
=======
    /*this.afs.collection('Article').getarticle(id).update(title=title).then(x=>{
      return alert("Doctor registered")
      setTimeout(()=>(100))

  }).catch(error=>{
      console.log("This is the error of updating query of changing state of doctor"+error);
  })

  this.afs.collection('Article').doc(title).update(description=description).then(x=>{
    return alert("Doctor registered")
    setTimeout(()=>(100))

}).catch(error=>{
    console.log("This is the error of updating query of changing state of doctor"+error);
})*/
/*db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})*/
  }

  Delete(){
    /*db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});*/ 
    this.afs.collection('Article').doc().delete().then(function(){
      console.log("Article successfully deleted")
      setTimeout(()=>(100))

    }).catch(function(error){
      console.error("Error:",error);
    });
    
  }
  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else if (modalDimension == undefined && type === 'Login') {
      this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}


  //upload images
  uploadFile(event) {
    //const user = JSON.parse(localStorage.getItem('user'));
    const file = event.target.files[0];
    const filePath = '/Article/' + Date.now() + '-' + this.files[0];
   // const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);
    this.ref = this.afStorage.ref(filePath);
    this.uploadPercent = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(
        finalize(async () => {
          this.downloadURL = await this.ref.getDownloadURL().toPromise();
          this.afs.collection('Article').add({
            url: this.downloadURL
          });
        })
      )
      .subscribe();
  }
  //end of upload images
>>>>>>> Stashed changes

  ngOnInit() {
    // const file = event.target.files[0]
    const id = Math.random().toString(36).substring(2);
    this.ref = this.auth.ref(id);
    // this.task = this.ref.put(<HTMLTextAreaElement>event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    //this.downloadURL = this.task.downloadURL();
    //this.afStorage.upload('/upload/to/this-path', event.target.files[0]); 
    this.downloadURL = this.auth.ref('/users/davideast.png').getDownloadURL();
    this.afStorage.upload('/upload/to/this-path');

    console.log('Image Uploaded!')
    //this.downloadURL.subscribe(url => this.image = url)
  }
}
<<<<<<< Updated upstream
 /* upload (event) {
   const file = event.target.files[0]
   const path = `posts/${file.name}`
   if (file.type.split('/')[0] !== 'image') {
     return alert('only image files')
   } else {
     const task = this.storage.upload(path, file)

     this.downloadURL = task.downloadURL()

     this.uploadPercent = task.percentageChanges()
     console.log('Image Uploaded!')
     this.downloadURL.subscribe(url => this.image = url)
   }*/
=======

>>>>>>> Stashed changes


