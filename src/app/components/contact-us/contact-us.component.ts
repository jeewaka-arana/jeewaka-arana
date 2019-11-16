import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    


  }

}
