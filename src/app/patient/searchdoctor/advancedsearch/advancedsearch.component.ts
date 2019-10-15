import { Component, OnInit } from '@angular/core';
 import {SearchdoctorService} from '../../../core/searchdoctor.service';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.scss']
})
export class AdvancedsearchComponent implements OnInit {

  constructor(private SearchDoctorService:SearchdoctorService) {

    
   }

  ngOnInit() {
  }

}
