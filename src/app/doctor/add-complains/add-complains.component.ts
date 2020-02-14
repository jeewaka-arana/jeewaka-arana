import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs/Rx'
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as Rellax from 'rellax';
import { CrudService } from 'app/core/crud.service';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-add-complains',
  templateUrl: './add-complains.component.html',
  styleUrls: ['./add-complains.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class AddComplainsComponent implements OnInit {

  Firstname: string;
  Lastname: string;
  Email: string;
  msg: string;
  

  
  userForm = new FormGroup({

    Firstname:new FormControl(''),
    Lastname:new FormControl(''),
    Email: new FormControl(''),
    msg:new FormControl(''),

  });
  my_id: string;
  constructor(private afs: AngularFirestore, private CrudService: CrudService, private AuthService: AuthService, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore, private fb: FormBuilder, private formBuilder: FormBuilder) {

    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(10);
   }

  ngOnInit() {
    this.userForm;
  }

  
 
  addIssue(data){

    this.CrudService.passDoctorIssues(data);
    
  }
  






}
