import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  providers:[DatePipe]
})
export class Test2Component {

  constructor(private datePipe: DatePipe)
  {   }

  ngOnInit() {
    var ddMMyyyy = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    console.log(ddMMyyyy); //output - 14-02-2019

    var MMddyyyy = this.datePipe.transform(new Date(),"MM-dd-yyyy");
    console.log(MMddyyyy); //output - 14-02-2019

    var short = this.datePipe.transform(new Date(),"M/d/yy");
    console.log(short); //output - 2/14/19

    var medium = this.datePipe.transform(new Date(),"MMM d, y, h:mm:ss a");
    console.log(medium); //output - Feb 14, 2019, 3:45:06 PM

    var me=this.datePipe.transform(new Date(),"MM" );
    console.log(me);
  }

 
  today: number = Date.now();
  

test(){

    console.log("hi pruthi");

    
  }
}
