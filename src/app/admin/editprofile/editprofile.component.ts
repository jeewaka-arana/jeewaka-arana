import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {CrudService} from 'app/core/crud.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  items: Array<any>;
  constructor(private auth: CrudService) { }

  ngOnInit() {
  }

}
