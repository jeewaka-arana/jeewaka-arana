import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.scss']
})
export class ComplainsComponent implements OnInit {
  click;
  docCol:AngularFirestoreCollection;
  doc:Observable<any>;
  patCol:AngularFirestoreCollection;
  pat:Observable<any>;

  docheadElements = ['Doctor Name', 'E-mail', 'Message'];
  patheadElements=['Patient Name','E-mail','Message'];
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  docComFunc(){
    this.click=true;
    this.docCol=this.afs.collection('DoctorComments');
this.doc=this.docCol.valueChanges();
  }

  patComFunc(){
    this.click=false;
    this.patCol=this.afs.collection('Issues');
    this.pat=this.patCol.valueChanges();

  }
}
