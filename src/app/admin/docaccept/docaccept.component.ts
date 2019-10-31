import { Component, OnInit } from '@angular/core';
import {CrudService} from 'app/core/crud.service';
@Component({
  selector: 'app-docaccept',
  templateUrl: './docaccept.component.html',
  styleUrls: ['./docaccept.component.scss']
})
export class DocacceptComponent implements OnInit {

  items: Array<any>;
  constructor(private auth: CrudService) { }
 
  ngOnInit() {
    this.auth.getDoctors()
      .then(result => {
        this.items = result;
      })
  }

}
