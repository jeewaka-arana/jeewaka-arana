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
    { name: 'Andorra', cities: ['Andorra la Vella','Escaldes-Engordany','	Encamp','La Massana','Santa Coloma','Ordino','Canillo','Arinsal'] },
    { name: 'Angola', cities: ['Luanda','Huambo','Lobito','Benguela','Lubango','Malanje','Cabinda','Sumbe','Longonjo','Mbanza Congo','Catabola','Caconda','Chissamba','Chela'] },
    { name: 'Antigua and Barbuda', cities: ['Bolans','Codrington','Dickenson Bay','Freetown','Jennings','Liberta','Parham','Swetes','Seaview Farm'] },
    { name: 'Argentina', cities: ['Buenos Aires','Córdoba','Rosario','Mendoza','Salta','Salta','Resistencia','Santiago del Estero','Corrientes','Posadas','Bahía Blanca','Formosa','San Luis','Comodoro Rivadavia','Río Cuarto'] },
    { name: 'Armenia', cities: ['Yerevan','Gyumri','Vanadzor','Abovyan','Kapan','Hrazdan','Armavir','Artashat','Gavar','	Goris','Ararat','Masis','	Artik','Sevan','Dilijan','Alaverdi','Martuni','Spitak','Vardenis','	Vedi','Kajaran'] },
    { name: 'Australia', cities: ['Sydney ','Albury','Armidale','Bathurst','Blue Mountains','Broken Hill','Cessnock','Dubbo','Grafton','Newcastle','Orange','Tamworth','Wagga Wagga','Wollongong'] },
    { name: 'Austria', cities: ['Vienna','	Graz','Linz','Salzburg','Innsbruck','Klagenfurt','Villach','Wels','	Dornbirn','Wiener Neustadt','Steyr','Bregenz','Leonding','Klosterneuburg','Leoben','Krems','Traun','Amstetten','Schwechat','	Tulln','Ternitz'] },
    { name: 'Austrian Empire', cities: ['Vienna'] },
    { name: 'Azerbaijan', cities: ['Agjabadi','Agstafa','Astara','Babek','Beylagan','Dashkasan','Davachi','Fuzuli','Gadabay','Julfa','Karabakh','Lankaran'] },

    { name: 'Bangladesh', cities: ['Dhaka','Dhaka','Rajshahi','Khulna','Sylhet','Mymensingh','Barisal','Rangpur','Comilla','Narayanganj','Gazipur'] },
    { name: 'Bahrain', cities: ['Manama ','Riffa ','Muharraq ','Hamad Town ','Aali','Isa Town ','Sitra ','Budaiya','Jidhafs '] },
    { name: 'Barbados', cities: ['Bridgetown',''] },
    { name: 'Belarus', cities: [''] },
    { name: 'Belgium', cities: [''] },
    { name: 'Belize', cities: [''] },
    { name: 'Benin (Dahomey)', cities: [''] },
    { name: 'Bolivia', cities: [''] },
    { name: 'Bosnia and Herzegovina', cities: [''] },
    { name: 'Botswana', cities: [''] },
    { name: 'Brazil', cities: [''] },
    { name: 'Brunei', cities: [''] },
    { name: 'Burma', cities: [''] },

    { name: 'Cambodia', cities: [''] },
    { name: 'Canada', cities: [''] },
    { name: 'Chile', cities: [''] },
    { name: 'China', cities: ['Beijing'] },
    { name: 'Colombia', cities: [''] },
    { name: 'Cuba', cities: [''] },

    { name: 'Denmark', cities: [''] },
    { name: 'Djibouti', cities: [''] },
    { name: 'Dominica', cities: [''] },
    { name: 'Dominican Republic', cities: [''] },

    { name: 'East Germany (German Democratic Republic)', cities: [''] },
    { name: 'Egypt', cities: [''] },
    { name: 'Estonia', cities: [''] },
    { name: 'Ethiopia', cities: [''] },

    { name: 'Finland', cities: [''] },
    { name: 'France', cities: [''] },

    { name: 'Georgia', cities: [''] },
    { name: 'Germany', cities: [''] },
    { name: 'Greece', cities: [''] },
    { name: 'Guinea', cities: [''] },
    { name: 'Guyana', cities: [''] },

    { name: 'Hawaii', cities: [''] },
    { name: 'Honduras', cities: [''] },
    { name: 'Hungary', cities: [''] },

    { name: 'Iceland', cities: [''] },
    { name: 'India', cities: [''] },
    { name: 'Indonesia', cities: [''] },
    { name: 'Iran', cities: [''] },
    { name: 'Iraq', cities: [''] },
    { name: 'Ireland', cities: [''] },
    { name: 'Israel', cities: [''] },
    { name: 'Italy', cities: [''] },

    { name: 'Jamaica', cities: [''] },
    { name: 'Japan', cities: [''] },
    { name: 'Jordan', cities: [''] },

    { name: 'Kenya', cities: [''] },
    { name: 'Kingdom of Serbia/Yugoslavia', cities: [''] },
    { name: 'Korea', cities: [''] },
    { name: 'Kuwait', cities: [''] },

    { name: 'Laos', cities: [''] },
    { name: 'Latvia', cities: [''] },
    { name: 'Lebanon', cities: [''] },
    { name: 'Liberia', cities: [''] },
     { name: 'Libya', cities: [''] },

    { name: 'Madagascar', cities: [''] },
    { name: 'Malawi', cities: [''] },
    { name: 'Malaysia', cities: [''] },
    { name: 'Maldives', cities: [''] },
    { name: 'Mexico', cities: [''] },
    { name: 'Moldova', cities: [''] },
    { name: 'Mongolia', cities: [''] },
    { name: 'Morocco', cities: [''] },

    { name: 'Nepal', cities: [''] },
    { name: 'New Zealand', cities: [''] },
    { name: 'Nigeria', cities: [''] },
    { name: 'Norway', cities: [''] },

    { name: 'Oman', cities: [''] },

    { name: 'Pakistan', cities: [''] },
    { name: 'Palau', cities: [''] },
    { name: 'Peru', cities: [''] },
    { name: 'Philippines', cities: [''] },
    { name: 'Poland', cities: [''] },
    { name: 'Portugal', cities: [''] },

    { name: 'Qatar', cities: [''] },

    { name: 'Romania', cities: [''] },
    { name: 'Russia', cities: [''] },

    { name: 'Saudi Arabia', cities: [''] },
    { name: 'Singapore', cities: [''] },
    { name: 'Somalia', cities: [''] },
    { name: 'South Africa', cities: [''] },
    { name: 'South Sudan', cities: [''] },
    { name: 'Spain', cities: [''] },
    { name: 'SriLanka', cities: ['Colombo','Dehiwala-Mount Lavinia','Moratuwa','Jaffna', 'Negombo','Pita Kotte',' Sri Jayewardenepura Kotte','Kandy','Trincomalee','Kalmunai','Galle','Point Pedro','Batticaloa','Katunayaka','Valvedditturai'
    ,'Matara','Battaramulla South','Dambulla','Maharagama','Kotikawatta','Anuradhapura','Vavuniya','Kolonnawa','Hendala','Ratnapura','Badulla'	
    ,'Puttalam','Devinuwara','Welisara','Kalutara','Bentota','Matale','Homagama','Beruwala','Panadura','Mulleriyawa','Kandana','Ja Ela','Wattala'	
    ,'Peliyagoda','Kelaniya','Kurunegala','Nuwara Eliya','Gampola','Chilaw','Eravur Town','Hanwella Ihala','Weligama','Vakarai','Kataragama'	
    ,'Ambalangoda','Ampara','Kegalle','Hatton','Polonnaruwa','Kilinochchi','Tangalle','Monaragala','Wellawaya','Gampaha','Horana'	
    ,'Wattegama','Minuwangoda','Horawala Junction','Kuliyapitiya'] },
    { name: 'Sudan', cities: ['Khartoum','Omdurman','Nyala','Port Sudan','Kassala','El Obeid','Al Qadarif','Kosti	','Wad Medani','El Daein','Singa','Geneina','Kadugli','Shendi	','Berber','Aroma	'] },
    { name: 'Sweden', cities: [''] },
    { name: 'Switzerland', cities: [''] },
    { name: 'Syria', cities: [''] },

    { name: 'Tajikistan', cities: [''] },
    { name: 'Tanzania', cities: [''] },
    { name: 'Thailand', cities: [''] },
    { name: 'The Gambia', cities: [''] },
    { name: 'The Netherlands', cities: [''] },
    { name: 'The United Arab Emirates', cities: [''] },
    { name: 'The United Kingdom', cities: [''] },
    { name: 'Togo', cities: [''] },
    { name: 'Tonga', cities: [''] },
    { name: 'Turkey', cities: [''] },
    { name: 'Tuvalu', cities: [''] },

    { name: 'Uganda', cities: [''] },
    { name: 'Uruguay', cities: [''] },

    { name: 'Venezuela', cities: [''] },
    { name: 'Vietnam', cities: [''] },

    { name: 'Yemen', cities: [''] },

    { name: 'Zambia', cities: [''] },
    { name: 'Zimbabwe', cities: [''] },


  

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
