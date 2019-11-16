import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Article } from 'app/core/models/article.model';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


interface Post {
  description: string;
  img: string;
  newArticle: string;
  title: string;
}

@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.scss']
})
export class PatienthomeComponent implements OnInit {

  // results: any;
  results: any[] = [];
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  name: string;
  email: string;
  issue: string;

  userForm: FormGroup;
  newUser: boolean = true; // to toggle login or signup form
  passReset: boolean = false;
my_id:string;
  constructor(private afs: AngularFirestore,private fb: FormBuilder,private afAuth:AngularFireAuth) { 

    // this.my_id=afAuth.auth.currentUser.uid;
  }

  ngOnInit() {
    // this.postsCol = this.afs.collection('Article')
    // this.posts = this.postsCol.valueChanges();
    this.afs.collection('Article',ref => ref.limit(4)).valueChanges().subscribe(results => {
      this.results = results;
      
    })
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
    this.afs.collection('Issues').add({'name': this.name, 'email': this.email, 'issue': this.issue});
  }

}
