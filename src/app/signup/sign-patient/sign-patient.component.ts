import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
// import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-sign-patient',
  templateUrl: './sign-patient.component.html',
  styleUrls: ['./sign-patient.component.scss']
})
export class SignPatientComponent implements OnInit {

 
  authError: any;

  constructor(private auth: AuthService) { }

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

  showpassword(passwd){
    
   if(passwd.type==="password"){
     passwd.type="text"
     return true;
   }
   else{
     passwd.type="password"
     return false;
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
}
