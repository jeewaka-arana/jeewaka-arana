import { Component, OnInit } from '@angular/core';
import {CrudService} from 'app/core/crud.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'; //for forms
import { Router } from '@angular/router';
import {AuthService} from '../../core/auth.service';



@Component({
  selector: 'app-sign-doctor',
  templateUrl: './sign-doctor.component.html',
  styleUrls: ['./sign-doctor.component.scss']
})
export class SignDoctorComponent implements OnInit {

  formdata=new FormGroup({ 
   
    FirstName:new FormControl('',[Validators.required]),
    LastName:new FormControl('',[Validators.required]),
    UserName:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required]),
    Phone:new FormControl('',[Validators.required]),
    NIC:new FormControl(''),
    Country:new FormControl('Please select your Country...'),
    City:new FormControl('Please select your City...'),
    Position:new FormControl(''),
    RegistrationNumber:new FormControl(''),
    FileUrl:new FormControl(''),
    Password:new FormControl('')
   },

   );

  constructor(private CrudService:CrudService,private router:Router,private AuthService:AuthService) { }

  ngOnInit() {
    this.formdata;
   }

 
   
   onClickSubmit(data) {
     this.CrudService.createDoctor(data);
     this.AuthService.SignUp(data.Email,data.Password);
     this.router.navigate(['default', {queryParams: { registered: 'true' } }]);
   }

 
}