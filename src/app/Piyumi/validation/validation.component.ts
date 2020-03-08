import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  myform:FormGroup;
  submitted=false;


  constructor(private datePipe: DatePipe,private afs:AngularFirestore,private fb:FormBuilder)
  {  



   }

  ngOnInit() {
   

    // console.log(me);
    this.myform = this.fb.group({
      Age: ['', Validators.required],
      Name: ['', Validators.required],
      Email: ['', Validators.required],
     
  });
  }

 
  
  
  
  // convenience getter for easy access to form fields
  get f() { return this.myform.controls; }

test(data:any){

  this.submitted = true;

  // stop here if form is invalid
  if (this.myform.invalid) {
      return;
  }
  
  
 this.afs.collection('P-adding').add(data);


    
  }
}
