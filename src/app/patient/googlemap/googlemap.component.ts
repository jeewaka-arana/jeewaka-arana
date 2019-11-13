import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import{CrudService} from 'app/core/crud.service';
import { Router } from '@angular/router';
import {AuthService} from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit {

  lat: number;
  lng: number;

  
  public query: string;

   

    my_id:string;
    constructor( private AuthService:AuthService, private router:Router ) {
      // this.my_id=afAuth.auth.currentUser.uid;
      
      this.query=router.getCurrentNavigation().finalUrl.toString().slice(11);
      console.log(this.query); 
    }
  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      });
    }
}
}
