import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-step3',
  templateUrl: './app-step3.component.html',
  styleUrls: ['./app-step3.component.scss']
})
export class AppStep3Component implements OnInit {
apDate:string;
Time:string;
Doctor:string;
my_id:string;
profile:any;
specialist:string;


Doc:AngularFirestoreDocument;


sliced:string;
slice_id;

form;



  constructor( private formBuilder: FormBuilder,private afs:AngularFirestore, private router: Router) { 
    this.form = this.formBuilder.group({
      PatientName: '',
      Email: '',
      PhoneNumber:''
    });


    this.sliced = router.getCurrentNavigation().finalUrl.toString().slice(10);
    this.slice_id = this.sliced.split('/');

    this.Time = this.slice_id[1];
    this.apDate = this.slice_id[2];
    this.my_id = this.slice_id[0];
    

   this.getDoctor();

  }

  ngOnInit() {
  }
  onSubmit(data) {

    // Process checkout data here
    this.afs.collection('Doctors').doc(this.my_id).collection('Appointments').add({PatientName:data.PatientName,Email:data.Email,PhoneNumber:data.PhoneNumber,Date:this.apDate,Time:this.Time});
    this.afs.collection('Patients').doc('dskyLFWguNTM7sRAiQ3tAQJ7L1u2').collection('Appointments').add({Date:this.apDate,Time:this.Time,Doctor:this.Doctor});
    this.router.navigate(['/patienthome']);
  }

  getDoctor(){
    this.Doc = this.afs.collection('Doctors').doc(this.my_id);
    this.Doc.valueChanges().subscribe(value=>{
     this.Doctor = value.Firstname + " " + value.Lastname ;
     this.specialist=value.Specialist;
     this.profile=value.downloadURL;
  });

}

}
