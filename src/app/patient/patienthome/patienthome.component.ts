import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Article } from 'app/core/models/article.model';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
// import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


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

  currentmonth = parseInt(this.datePipe.transform(new Date(), "MM"));
  currentday = parseInt(this.datePipe.transform(new Date(), "dd"));
  currentyear = parseInt(this.datePipe.transform(new Date(), "yyyy"));
  currenthour = parseInt(this.datePipe.transform(new Date(), "HH"));
  currentminute = parseInt(this.datePipe.transform(new Date(), "mm"));
  currentsecond = parseInt(this.datePipe.transform(new Date(), "ss"));

  // results: any;
  results: any[] = [];
  issues: any[] = [];
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  page = 1;
  pageSize = 2;

  name: string;
  email: string;
  issue: string;
  telno: number;

  userForm: FormGroup;
  newUser: boolean = true; // to toggle login or signup form
  passReset: boolean = false;
  my_id: string;
  sessionid: string;
  constructor(private afs: AngularFirestore, private datePipe: DatePipe, private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {

    // this.my_id=afAuth.auth.currentUser.uid;
    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(13);
    console.log(this.my_id);
  }

  ngOnInit() {
    // this.postsCol = this.afs.collection('Article')
    // this.posts = this.postsCol.valueChanges();

    //retrieving Articles based on the date
    this.afs.collection('Article', ref => ref.orderBy('date')).valueChanges().subscribe(results => {
      this.results = results;

    })
    // this.afs.collection('Article',ref => ref.orderBy("time", "desc")).valueChanges().subscribe(results => {
    //   this.results = results; 
    // })

    this.buildForm();
  }


  //validating the form
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
      'telno': ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern('[0-9]*')
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
    'telno': '',
    'issue': ''
  };

  //validation message to be shown
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'name': {
      'required': 'Name is required.'
    },
    'telno': {
      'required': 'Telephone number is required.',
      // 'maxLength': 'Length should be of 10 only digits.', 
      // 'minLength': 'Length should be of 10 digits.',
      'pattern': '-telephone number should be of 10 digits.'
    },
    'issue': {
      'required': 'Description is required.',
    }
  };

  //adding issues to the database
  addIssue() {
    this.afs.collection('Issues').add({
      time: firebase.firestore.FieldValue.serverTimestamp(),
      'name': this.name,
      'email': this.email,
      'telno': this.telno,
      'issue': this.issue,
      'Day': this.currentday,
      'Month': this.currentmonth,
      'Year': this.currentyear,
      'Hour': this.currenthour,
      'Minute': this.currentminute,
      'Second': this.currentsecond,
    });
  }

}
