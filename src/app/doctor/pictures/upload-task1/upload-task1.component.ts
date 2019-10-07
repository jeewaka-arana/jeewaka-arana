import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
@Component({
  selector: 'app-upload-task1',
  templateUrl: './upload-task1.component.html',
  styleUrls: ['./upload-task1.component.scss']
})
export class UploadTask1Component implements OnInit {
  @Input() file1: File;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  ngOnInit() {
    this.startUpload();
  }
  startUpload() {
// The storage path
    const path = `Img1/${Date.now()}_${this.file1.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
// The main task
    this.task = this.storage.upload(path, this.file1);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
 this.db.collection('files1').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }


}