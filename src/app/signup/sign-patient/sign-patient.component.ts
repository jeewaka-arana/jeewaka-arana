import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';


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
    console.log("veliya");
   if(passwd.type==="password"){
     passwd.type="text"
     console.log("ulla");
     return true;
   }
   else{
     passwd.type="password"
     console.log("else kulla");
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
