import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Article } from 'app/core/models/article.model';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-pfooter',
  templateUrl: './pfooter.component.html',
  styleUrls: ['./pfooter.component.scss']
})
export class PfooterComponent implements OnInit {

  my_id:string;

  constructor(private afs: AngularFirestore,private datePipe: DatePipe,private fb: FormBuilder,private afAuth:AngularFireAuth,private router: Router) 
  {
    
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(13);
  }

  ngOnInit() {
  }

}
