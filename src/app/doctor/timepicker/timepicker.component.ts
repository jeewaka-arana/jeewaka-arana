import { Component, OnInit ,Input} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

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
monaddingtime=new Array;
tueaddingtime=new Array;
wedaddingtime=new Array;
thuaddingtime=new Array;
friaddingtime=new Array;
sataddingtime=new Array;
sunaddingtime=new Array;



slots=[];
timeslots=[];

timestring:string;


time:any=<time>{};
flag:any=0;

  constructor(private afs:AngularFirestore){
   
  }

//this function divide the given time duration to 30-30 hour slots and save it to an array
dividetime(from:any,to:any){

this.slots=[];
this.time.hour=from.hour;
this.time.minute =from.minute;
console.log(this.time);

this.slots[0]={hour:this.time.hour,minute:this.time.minute};
for (let index = 1;index<10; index++) {
 
  this.time.minute=this.time.minute+30;
  
  if(this.time.minute >= 60){
    this.time.minute = this.time.minute -60;
    this.time.hour = this.time.hour +1;
    
  }

  if(this.time.hour==to.hour){
    if(to.minute-this.time.minute>30){
      this.slots[index]={hour:this.time.hour,minute:this.time.minute};
      
    }else{
      break;
    }

    
  }else if(this.time.hour>to.hour){
    break;
  }
  

  
  this.slots[index]={hour:this.time.hour,minute:this.time.minute};
  

  
  
}


console.log(this.slots);



}

changetime_tostring(){
  for (let index = 0; index < this.slots.length; index++) {
    this.timeslots[index] = String(this.slots[index].hour) +":" + String(this.slots[index].minute);
    
  }

  console.log(this.timeslots);
}

//save timeslots to the database
savetimeslots(from:any,to:any,day:any){

  this.dividetime(from,to);
  this.changetime_tostring();
  this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('Timeslots').doc(day).set({Time:this.timeslots});

}

mon_addNew(){this.monaddingtime.push(1);}
tue_addNew(){this.tueaddingtime.push(1);}
wed_addNew(){this.wedaddingtime.push(1);}
thu_addNew(){this.thuaddingtime.push(1);}
fri_addNew(){this.friaddingtime.push(1);}
sat_addNew(){this.sataddingtime.push(1);}
sun_addNew(){this.sunaddingtime.push(1);}


test(){
 
}
}
