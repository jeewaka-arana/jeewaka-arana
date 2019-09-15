import { Component, OnInit } from '@angular/core';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {

    upload(event) {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.task.downloadURL();
    }
  }

}
