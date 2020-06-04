import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.scss']
})
export class UpdatingComponent implements OnInit {
 
  
  userForm = new FormGroup({

    Firstname:new FormControl(''),
    Lastname:new FormControl(''),
    Email: new FormControl(''),
    msg:new FormControl(''),
    

  });
  d: any;

  

  constructor(private afs: AngularFirestore, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore, private fb: FormBuilder, private formBuilder: FormBuilder) {



    this.afs.collection('P-adding').doc('WBzdL31PHroJnJmNnMXQ').valueChanges().subscribe(result => {
      this.d = result;

    this.userForm.patchValue({
      Firstname: result["Firstname"],
      Lastname: result["Lastname"]
    });

  });
   }

  ngOnInit() {

    this.userForm;


  }


  

  update(data)
  {
    
    this.afs.collection('P-adding').doc('WBzdL31PHroJnJmNnMXQ').update(data);
    
  }
}
