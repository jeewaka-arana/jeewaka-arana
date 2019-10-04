import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';



@Component({
  selector: 'app-sign-doctor',
  templateUrl: './sign-doctor.component.html',
  styleUrls: ['./sign-doctor.component.scss']
})
export class SignDoctorComponent implements OnInit {
 



  authError: any;
  tom=false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })

  }

  createUser(frm) {
    this.auth.createDoctor(frm.value);
  }
 
}