import { Component, OnInit } from '@angular/core';
import { CrudService } from 'app/core/crud.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],

})
export class AdminComponent implements OnInit {

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
  }


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


