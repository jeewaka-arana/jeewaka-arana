import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-step3',
  templateUrl: './app-step3.component.html',
  styleUrls: ['./app-step3.component.scss']
})
export class AppStep3Component implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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

}


