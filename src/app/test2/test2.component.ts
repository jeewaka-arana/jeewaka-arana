import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  constructor(ts:firestore.Timestamp){


  }

test(){
    console.log("hi pruthi");
    

  }
}
