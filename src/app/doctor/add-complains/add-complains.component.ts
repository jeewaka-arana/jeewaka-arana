import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs/Rx'
// import{CrudService} from 'app/core/crud.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as Rellax from 'rellax';
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

  name: string;
  email: string;
  issue: string;
  userForm: FormGroup;
// formdata=new FormGroup({ 
//   cname:new FormControl(''),
//   cmail:new FormControl('') ,
//   cmsg:new FormControl('') ,
// });
  constructor(private afs: AngularFirestore,private fb: FormBuilder,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    this.buildForm();
  }
  buildForm(): void {
    this.userForm = this.fb.group({
      'email': ['', [
          Validators.required,
          Validators.email
        ]
      ],
      'name': ['', [
        Validators.required,
      ]
    ],
    'issue': ['', [
      Validators.required,
    ]
  ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

 formErrors = {
    'email': '',
    'name': '',
    'issue': ''
  };

  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email must be a valid email'
    },
    'name': {
      'required':      'Name is required.'
    },
    'issue': {
      'required':      'Description is required.',
    }
  };

  addIssue(){
    this.afs.collection('DoctorIssues').add({'name': this.name, 'email': this.email, 'issue': this.issue});
  }
  // submitcomplain(data){
  //   this.CrudService. passData(data);
  // }

}
