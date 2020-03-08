import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {
  
// this is for only adding without validation

  userForm = new FormGroup({

    Firstname:new FormControl('',[Validators.required]),
    Lastname:new FormControl(''),
    Email: new FormControl(''),
    msg:new FormControl(''),
    

  });


  
  //AngularFirestore with afs or db

  constructor(private afs: AngularFirestore, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore,  private formBuilder: FormBuilder) { }

  ngOnInit():void {


    this.userForm;


    // 

  }


  add(data)
  {

    this.afs.collection('P-adding').add(data);
  }
}
