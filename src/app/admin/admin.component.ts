import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  date:String;
  constructor() {
  setInterval(()=>{
    let currentDate= new Date();
    this.date=currentDate.toDateString() +'  ' +currentDate.toLocaleTimeString();
  } , 1000);
   }

 
  ngOnInit() {
   
  }

}
