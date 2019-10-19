import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {User} from 'firebase';
import { TestService } from 'app/core/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
constructor(private authservice:TestService){

}

createUser(frm) {
    this.authservice.addstudent(frm.value.email,frm.value.password);
  }
 
  }







