import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-pat-login',
  templateUrl: './pat-login.component.html',
  styleUrls: ['./pat-login.component.scss']
})
export class PatLoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  login(frm) {
    this.auth.pat_login(frm.value.email, frm.value.password);
  }

}
