import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export enum month{
  Jan =1,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
}

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
mydate;
Day:number;
Month:string;
Year:number;

emonth:any;

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
  

    this.mydate=this.apDate.split('-');
    this.Day=parseInt(this.mydate[1]);
    this.Month=this.mydate[0];
    this.Year=parseInt(this.mydate[2]);

    this.emonth=month[this.Month];
    
    


    

   this.getDoctor();

  }

  // ngOnInit() {
  //   this.buildForm();
  // }
  // buildForm(): void {
  //   this.userForm = this.fb.group({
  //     'email': ['', [
  //         Validators.required,
  //         Validators.email
  //       ]
  //     ],
  //     'name': ['', [
  //       Validators.required,
  //     ]
  //   ],
  //   'issue': ['', [
  //     Validators.required,
  //   ]
  // ],
  //   });

  //   this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  //   this.onValueChanged(); // reset validation messages
  // }
  onSubmit(data) {

    // Process checkout data here
    this.afs.collection('Doctors').doc(this.my_id).collection('Appointments').add({PatientName:data.PatientName,Email:data.Email,PhoneNumber:data.PhoneNumber,Date:this.apDate,Time:this.Time});
    this.afs.collection('Patients').doc('dskyLFWguNTM7sRAiQ3tAQJ7L1u2').collection('Appointments').add({Day:this.Day,Month:this.emonth,Year:this.Year,Time:this.Time,Doctor:this.Doctor});
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


ngOnInit(){
  
}

}
