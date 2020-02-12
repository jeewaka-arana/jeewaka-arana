import { Component, OnInit ,Input} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface time{
  hour:number;
  minute:number;
}

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent {

  @Input() index:string;
t:string;
addingtime=new Array;
slots=new Array;
time:any=<time>{};
flag:any=0;
weekdays=new Array;
  constructor(private afs:AngularFirestore){

  }


dividetime(from:any,to:any){

  //here it shows hour property in undefined......oops
// this.time.hour=from.hour;
// this.time.minute =from.minute;

console.log(this.time.hour);



this.slots.push(this.time);
  while (this.flag==0) {

  this.time.minute=from.minute+30;
  if(this.time.minute > 60){
    this.time.minute = this.time.minute -60;
    this.time.hour = this.time.hour +1;
    
  }

  if(this.time.hour=to.hour){
    if(this.time.minute>to.minute){
      this.flag=1;
      break;
    }

    this.slots.push(this.time);
  }else if(this.time.hour>to.hour){
    break;
  }
  
  this.slots.push(this.time);
   
    
  }
 


}

// savetime(from:any,to:any){
//  // this.afs.collection('example').add({"from":[]});
//  console.log("hi");
//  this.afs.collection('Doctors').doc('1QA7Ebss0wU28EJEzg9pGPjJF8L2').collection('timepicker').add({"from":{hour:from.hour,minute:from.minute},"to":{hour:to.hour,minute:to.minute}});
 

// }

addNew(){
  this.addingtime.push(1);

}

test(from:any,to:any){
  console.log(this.time.value);
  // console.log(to.hour);
  //console.log(this.slots);
}
}
