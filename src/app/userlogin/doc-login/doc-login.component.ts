import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.scss']
})
export class DocLoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  login(frm) {
    this.auth.doc_login(frm.value.email, frm.value.password);
  }

}
