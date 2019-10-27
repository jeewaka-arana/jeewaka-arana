import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent  {

  constructor() { }

  time = {hour: 13, minute: 30};
  meridian = true;


}
