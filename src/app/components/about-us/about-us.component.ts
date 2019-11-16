import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  
  `]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var rellaxHeader = new Rellax('.rellax-header');

  }

}
