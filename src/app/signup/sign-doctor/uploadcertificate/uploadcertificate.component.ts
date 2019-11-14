import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import{CrudService} from 'app/core/crud.service';
import { Doctor } from '../../../core/models/doctor.model';
import {AuthService} from '../../../core/auth.service';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-uploadcertificate',
  templateUrl: './uploadcertificate.component.html',
  styleUrls: ['./uploadcertificate.component.scss']
})
export class UploadcertificateComponent implements OnInit {

  @Input() file: File;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  CertificateURL: string;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore,private CrudService:CrudService,private AuthService:AuthService,private  afs: AngularFirestore) { }
  ngOnInit() {
    this.startUpload();
  }
  startUpload() {
// The storage path
    const path = `Certificates/${Date.now()}_${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
// The main task
    this.task = this.storage.upload(path, this.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.CertificateURL = await ref.getDownloadURL().toPromise();
        
//  this.db.collection('Doctors').add( { CertificateURL: this.CertificateURL, path });
this.db.collection('Doctors');
var id=this.AuthService.userId;

var doctorRef=this.afs.collection('Doctors');
doctorRef.doc(id).update({ CertificateURL: this.CertificateURL, path});
      }),
    );
  }

}
