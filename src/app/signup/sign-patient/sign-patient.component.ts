import { Component, OnInit } from '@angular/core';
import {CrudService} from 'app/core/crud.service';
import {FormGroup,FormControl} from '@angular/forms'; //for forms
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-patient',
  templateUrl: './sign-patient.component.html',
  styleUrls: ['./sign-patient.component.scss']
})
export class SignPatientComponent implements OnInit {

  formdata=new FormGroup({ 
   
    FirstName:new FormControl(''),
    LastName:new FormControl(''),
    UserName:new FormControl(''),
    Email:new FormControl(''),
    Phone:new FormControl(''),
    NIC:new FormControl(''),
    Country:new FormControl('Please select your Country...'),
    City:new FormControl('Please select your City...'),
    Password:new FormControl('')
   });


  constructor(private CrudService:CrudService,private router:Router) { }

  ngOnInit() {
    this.formdata;
   }
 
   
   onClickSubmit(data) {
     this.CrudService.createPatient(data);
     this.router.navigate(['user', {queryParams: { registered: 'true' } }]);
   }

}
