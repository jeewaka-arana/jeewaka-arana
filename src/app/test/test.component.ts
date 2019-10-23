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
 exp:number;
slider(data:number){
this.exp=data;
  // console.log(data);
  console.log(this.exp);
  
}




  }







