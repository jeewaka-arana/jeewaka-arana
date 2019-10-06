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
  task1: AngularFireUploadTask;
  percentage1: Observable<number>;
  snapshot1: Observable<any>;
  downloadURL1: string;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  ngOnInit() {
    this.startUpload();
  }
  startUpload() {
// The storage path
    const path1 = `Img1/${Date.now()}_${this.file1.name}`;
    // Reference to storage bucket
    const ref1 = this.storage.ref(path1);
// The main task
    this.task1 = this.storage.upload(path1, this.file1);
    // Progress monitoring
    this.percentage1 = this.task1.percentageChanges();
    this.snapshot1   = this.task1.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL1 = await ref1.getDownloadURL().toPromise();
 this.db.collection('files1').add( { downloadURL: this.downloadURL1, path1 });
      }),
    );
  }


}