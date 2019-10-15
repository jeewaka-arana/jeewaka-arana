import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {
  @Input() file: File;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  videodownloadURL: string;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  ngOnInit() {
    this.startUpload();
  }
  startUpload() {
// The storage path
    const pathvideo = `Videos/${Date.now()}_${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(pathvideo);
// The main task
    this.task = this.storage.upload(pathvideo, this.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.videodownloadURL = await ref.getDownloadURL().toPromise();
 this.db.collection('videos').add( { videodownloadURL: this.videodownloadURL, pathvideo });
      }),
    );
  }


}