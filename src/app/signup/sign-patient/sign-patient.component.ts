import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
// import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-sign-patient',
  templateUrl: './sign-patient.component.html',
  styleUrls: ['./sign-patient.component.scss']
})
export class SignPatientComponent implements OnInit {

  countryList: Array<any> = [
   
    { name: 'Afghanistan', cities: ['Kabul', 'Kandahar', 'Herat','Mazar-i-Sharif','Jalalabad','Kunduz','Ghazni','Lashkargah','Taloqan','Puli Khumri','Khost','Charikar','Sheberghan','Sar-e Pol','Maymana','Chaghcharan','Mihtarlam','Farah','Puli Alam'] },
    { name: 'Albania', cities: ['Tirana','Elbasan','Fier','Berat','Pogradec','Sarandë','Patos','Mamurras','Peshkopi','Burrel','	Milot','Gramsh','	Klos','Ballsh'] },
    { name: 'Algeria', cities: ['Algiers','Algiers','Constantine','Annaba','Blida','Batna','Djelfa','Biskra','El Oued','Skikda','Tiaret','Tlemcen','Ouargla','Mostaganem','Chlef','Souk Ahras','Touggourt','Ghardaïa','Laghouat','Jijel','Relizane','Guelma','Khenchela','Bousaada','Mascara','Tindouf','Tizi Ouzou'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];


  

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


cities: Array<any>;
changeCountry(count) {
  this.cities = this.countryList.find(con => con.name == count).cities;
}


}
