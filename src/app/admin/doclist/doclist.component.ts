import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';
import {CrudService} from 'app/core/crud.service';
@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.scss']
})
export class DoclistComponent implements OnInit {
  items: Array<any>;
  constructor(private auth: CrudService) {
    
   }

  ngOnInit() {
    this.auth.getPeople()
    .then(result => {
      this.items = result;
    })
  }

 
}
