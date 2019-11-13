import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],

})
export class TimeComponent {
  @Input() index:string;
t:string;
  constructor(private afs:AngularFirestore){

  }
  savetime(data:any){
   
    this.t ="Time".concat(this.index)
    this.afs.collection('example').doc('Nx69wcHk2Rlnt7lF9V3J').update({[this.t]:{hour:data.hour,minute:data.minute}});
  }

}


