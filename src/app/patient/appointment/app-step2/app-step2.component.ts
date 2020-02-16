import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import * as _ from 'lodash';
import { Doctor } from 'app/core/models/doctor.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export enum WeekDays {
  Sunday = 1,
  Monday=2,
  Tuesday=3,
  Wednesday=4,
  Thursday=5,
  Friday=6,
  Saturday=7
}
 
@Component({
  selector: 'app-app-step2',
  templateUrl: './app-step2.component.html',
  styleUrls: ['./app-step2.component.scss'],
  providers:[DatePipe]
})


export class AppStep2Component implements OnInit {
x: any;
y: any;
m: any;
d: any;
p: any;
today: number = Date.now();



//to increase and decrease date
currentmonth=this.datePipe.transform(new Date(),"MMM" );
currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
currentdayname =this.datePipe.transform(new Date(),"EEEE");
currentyear=this.datePipe.transform(new Date(),"yyyy");

day=this.currentday;
month=this.currentmonth;
year=this.currentyear;
dayname =this.currentdayname;
daynum=WeekDays[this.dayname];


message:string;



clicktime:string;

date:string;
docid:string;

timeslot=[];

//availability
avail=[];
myslots=[];






slotCol: AngularFirestoreCollection<any>;
slotDoc:AngularFirestoreDocument;
slots: Observable<any[]>;
slotdoc:Observable<any[]>
slotid:any;
data:any;

mydate:string;
mytime:string;
myid:string;

sliced;
slice_id;
patid;
slotdata:any;

  constructor(private afs:AngularFirestore,private datePipe: DatePipe,private router: Router) {

    this.sliced = router.getCurrentNavigation().finalUrl.toString().slice(10);
    this.slice_id = this.sliced.split('/');

    this.myid = this.slice_id[1];
    this.patid=this.slice_id[0]
 
  

 

    this.slotCol = afs.collection('Doctors').doc(this.myid).collection('Timeslots');

    this.slotdoc=this.slotCol.valueChanges();
  

    this.getSlot();
    

   }

  ngOnInit() {
    console.log(this.month);
    console.log(this.day);
    console.log(this.year);
    console.log(this.daynum);
  }

  increase()
  {

    //small correction,it is not working or monday
    this.day=this.day+1;
    this.daynum=this.daynum+1;
    if(this.daynum>7){
      this.daynum=1;
    }
    this.dayname=WeekDays[this.daynum];
    console.log(this.dayname);
   
    this.getSlot();
  }

  decrease()
  {
    if(this.day>this.currentday)
    {

     
      this.day=this.day-1;
      this.daynum=this.daynum-1;
      if(this.daynum <1){
        this.daynum=7;
      }
      this.dayname=WeekDays[this.daynum];
      console.log(this.dayname);
      this.getSlot();

    }
    else
    {
      alert("You are in current date");
    }

  }

  getSlot()
  {
    // this.date=this.month+" "+this.day+","+this.year;
    this.docid=this.dayname;
    this.slotDoc = this.afs.collection('Doctors').doc(this.myid).collection('Timeslots').doc(this.docid);
    this.slotDoc.valueChanges().subscribe(value=>{
      if(value){
        this.message="";
        this.myslots =[];
       
        this.timeslot=value.Time;
        this.avail=value.avail;
       
        this.myslots=this.timeslot.map(function(x,i){
          return {"time":x,"avail":this.avail[i]}
            }.bind(this));
            console.log(this.myslots);
      }

      else{
        this.timeslot=[];
        this.myslots =[];
        this.message="No slots available";
      }
    
    })

    

  }

  clickTime(time:string,month:string,year:string,day:string)
  {
    this.clicktime=time;
    this.mydate=month+"-"+day+"-"+year;
    console.log(this.clicktime);
    console.log(this.mydate);
  }

  next()
  {
    if(this.clicktime)
    {
      this.router.navigate(['/appstep3',this.myid,this.clicktime,this.mydate,this.patid]);
      
    }

    else{
      alert("No time is selected");
    }
  }


// checkSlots(){
    
//   for(let i of this.avail){
//     console.log(i);
//   }

//}

// test(){
//   this.myslots=this.timeslot.map(function(x,i){
// return {"time":x,"avail":this.avail[i]}
//   }.bind(this));


//   console.log(this.myslots);
// }

setavail(){
  //set to false
}

}
