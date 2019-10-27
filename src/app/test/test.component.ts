import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {User} from 'firebase';
import { TestService } from 'app/core/test.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
constructor(private afs:AngularFirestore){

}
 items=new Array;



 
//  timeArray:Array<any>;

// time = {hour: 13, minute: 30};
//   meridian = true;

  // toggleMeridian() {
  //     this.meridian = !this.meridian;
  // }





  addNew(){
    this.items.push(1);

  }

  }







