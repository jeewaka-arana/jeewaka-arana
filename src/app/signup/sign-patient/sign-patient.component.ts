import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
// import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-sign-patient',
  templateUrl: './sign-patient.component.html',
  styleUrls: ['./sign-patient.component.scss']
})
export class SignPatientComponent implements OnInit {

  private _shown = false;
  authError: any;

  constructor(private auth: AuthService,private el: ElementRef) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
    // this.tstr.success("Done");

  
  }

  createUser(frm) {
    this.auth.createPatient(frm.value);
  }

  test(controlName: string){
    if(controlName=="qwerty"){
      console.log("hi");
    }
    else{
      console.log("bye")
    }
  }

  
  
checkpassword(password:string,confPassword:string){

  if(password==confPassword){
    return true;
  }
  else{
    return false;
  }

}

setup() {
  const parent = this.el.nativeElement.parentNode;
  const span = document.createElement('span');
  span.innerHTML = '<button class="show-pass" type="button"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
  span.addEventListener('click', (event) => {
    this.toggle(span);
  });
  parent.appendChild(span);
}
toggle(span: HTMLElement) {
  this._shown = !this._shown;
  if (this._shown) {
    this.el.nativeElement.setAttribute('type', 'text');
    span.innerHTML = '<button class="show-pass" type="button" style="padding: 2px;,position: absolute;, right: 5px;top:10.5em;,background-color: #ffffff00;,border-color: #ffffff00;,left: 23em;"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
  } else {
    this.el.nativeElement.setAttribute('type', 'password');
    span.innerHTML = '<button class="show-pass" type="button"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
  }
}
}
