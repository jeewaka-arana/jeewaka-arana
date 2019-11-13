import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'; //for firestore connection
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import {AuthService} from '../core/auth.service';
import { FileUpload  } from './models/file-upload.model';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';
  constructor(private db: AngularFireDatabase) { }
  /*pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    fileUpload.url = downloadURL;
    fileUpload.name = __filename;
    this.saveFileData(fileUpload);
  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }*/
 
  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
 /*
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
 
  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
 
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }*/
}
