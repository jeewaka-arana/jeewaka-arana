import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { Router } from '@angular/router';
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
  my_id: string;
  constructor(private router: Router) { 

    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(15);
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
  }

}
