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

  userForm :FormGroup;
  submitted=false;
  // Firstname: string;
  // Lastname: string;
  // Email: string;
  // msg: string;
  

  // passing
  // userForm = new FormGroup({

  //   Firstname:new FormControl(''),
  //   Lastname:new FormControl(''),
  //   Email: new FormControl(''),
  //   msg:new FormControl(''),

  // });

  my_id: string;
  constructor(private afs: AngularFirestore, private CrudService: CrudService, private AuthService: AuthService, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore, private fb: FormBuilder) {

    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(10);
   }

  ngOnInit() {
    //passing
    // this.userForm;
    this.userForm=this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', Validators.required],
     msg:['',Validators.required],

    });
}

  

get f() { return this.userForm.controls; }
 

  addIssue(data){

    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    // this.CrudService.passDoctorIssues(data);
    this.afs.collection('DoctorIssues').add(data);
    
  }
  






}
