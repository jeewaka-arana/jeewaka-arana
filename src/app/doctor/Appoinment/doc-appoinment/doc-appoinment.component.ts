import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
@Component({
  selector: 'app-doc-appoinment',
  templateUrl: './doc-appoinment.component.html',
  styleUrls: ['./doc-appoinment.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class DocAppoinmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
  }

}
