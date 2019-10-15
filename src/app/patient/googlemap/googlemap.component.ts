import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
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
