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


//to increace and decrese date
currentmonth=this.datePipe.transform(new Date(),"MMM" );
currentday=parseInt(this.datePipe.transform(new Date(),"dd"));
currentyear=this.datePipe.transform(new Date(),"yyyy");

day=this.currentday;
month=this.currentmonth;
year=this.currentyear;

message:string;



clicktime:string;

date:string;

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

slotdata:any;

  constructor(private afs:AngularFirestore,private datePipe: DatePipe,private router: Router) {

    this.myid = router.getCurrentNavigation().finalUrl.toString().slice(10);
    console.log(this.myid);

    this.slotCol = afs.collection('Doctors').doc('1QA7Ebss0wU28EJEzg9pGPjJF8L2').collection('Timeslots');

    this.slotdoc=this.slotCol.snapshotChanges();
   

    this.getSlot();
    

   }

  ngOnInit() {
    console.log(this.month);
    console.log(this.day);
    console.log(this.year);
  }

  increase()
  {
    this.day=this.day+1;
   
    this.getSlot();
  }

  decrease()
  {
    if(this.day>this.currentday)
    {
      this.day=this.day-1;
     
      this.getSlot();

    }
    else
    {
      alert("You are in current date");
    }

  }

  getSlot()
  {
    this.date=this.month+" "+this.day+","+this.year;
    this.slotDoc = this.afs.collection('Doctors').doc('1QA7Ebss0wU28EJEzg9pGPjJF8L2').collection('Timeslots').doc(this.date);
    this.slotDoc.valueChanges().subscribe(value=>{
      if(value){
        this.message="";
        this.timeslot=value.Time;
        this.avail=value.avail;
       
        this.myslots=this.timeslot.map(function(x,i){
          return {"time":x,"avail":this.avail[i]}
            }.bind(this));
            console.log(this.myslots);
      }

      else{
        this.timeslot=[];
        this.message="No slots available";
      }
    
    })

    

  }

  clickTime(time:string,month:string,year:string,day:string)
  {
    this.clicktime=time;
    // this.mydate=month+"-"+day+"-"+year;
    console.log(this.mydate);
  }

  next()
  {
    if(this.clicktime)
    {
      this.router.navigate(['/appstep3',this.myid,this.clicktime,this.mydate]);
      
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

test(){
  this.myslots=this.timeslot.map(function(x,i){
return {"time":x,"avail":this.avail[i]}
  }.bind(this));


  console.log(this.myslots);
}



}