import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable} from 'rxjs/Rx'

import { UploadFileService } from '../core/upload-file.service';
import { AuthService } from 'app/core/auth.service';
import * as Rellax from 'rellax';
 
interface Post {
  date: Date;
  description: string;
  img: string;
  newArticle: string;
  title: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class AdminComponent implements OnInit {
  fileUploads: any[];
  results: any[] = [];
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore,private fb: FormBuilder, private uploadService: UploadFileService,private auth:AuthService) { 
this.auth.test();

  }

  ngOnInit() {
    
    this.afs.collection('Article',ref => ref.limit(4)).valueChanges().subscribe(results => {
      this.results = results;
      
    })
    
    this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  login(frm){
    this.auth.admin_login(frm.value.email, frm.value.password);
  }

}
