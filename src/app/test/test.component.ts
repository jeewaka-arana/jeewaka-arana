import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {User} from 'firebase';
import { TestService } from 'app/core/test.service';
import { AngularFirestore } from '@angular/fire/firestore';

export interface test{
  name:string;
  age:number;
  
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
constructor(private afs:AngularFirestore){

}
 items=new Array;









  addNew(){
    this.items.push(1);

  }


  test(time:any){
    console.log(time.hour);
  }

  }







