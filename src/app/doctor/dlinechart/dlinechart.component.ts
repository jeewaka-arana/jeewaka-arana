import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dlinechart',
  templateUrl: './dlinechart.component.html',
  styleUrls: ['./dlinechart.component.scss']
})
export class DlinechartComponent implements OnInit {
  @Input() userid:string;
  // @Input('year') year:any;
  
  
  myyear:any;
  jan:any ;
  feb:any;
  mar:any;
  apr:any;
  may:any;
  jun:any;
  jul:any;
  aug:any;
  sep:any;
  oct:any;
  nov:any;
  dec:any;
  QueryCol: AngularFirestoreCollection;
  Query: Observable<any>;
  lineChartData: ChartDataSets[] = [
    { data: [
      this.jan,
      this.feb, 78, 75, 77, 75,0,1,3], 
      label: 'Number Of Patient' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'lightblue',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private afs: AngularFirestore){
    //this.myyear=this.year;
  }

 

   ngOnInit(){
    // console.log(this.year);
    // this.QueryCol = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', +this.year));
    // await this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', 2019)).valueChanges().subscribe(result=>{
    //  var sum=0;
    //   result.forEach(element => {
    //     if(element['month']==1){
    //       sum=sum+1;
    //     }
    //   });
    //  this.jan=sum;
     
    // });
   
    // if(this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==', 1)))
    // {

    //   this.Query = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',1 )).valueChanges();
    //   this.Query.subscribe((data) => { this.jan = data.length });

    // }
    // else if(this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',2 )))
    // {
    //   this.Query = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',2 )).valueChanges();
    //   this.Query.subscribe((data) => { this.feb = data.length });
    // }
    // else if(this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',3 )))
    // {
    //   this.Query = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',3 )).valueChanges();
    //   this.Query.subscribe((data) => { this.mar = data.length });
    // }
    // else if(this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',4 )))
    // {
    //   this.Query = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('month', '==',4 )).valueChanges();
    //   this.Query.subscribe((data) => { this.apr = data.length });
    // }

  }


  
  yearFilter(data) {
    this.QueryCol = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', +data));
   this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', +data)).valueChanges().subscribe(result=>{
     var jan=0;
     var feb=0;
     var mar=0;
     var apr=0;
     var may=0;
     var jun=0;
     var jul=0;
     var aug=0;
     var sep=0;
     var oct=0;
     var nov=0;
     var dec=0;
      result.forEach(element => {
        if(element['month']==1){
          jan=jan+1;
        }
        else if(element['month']==2){
          feb=feb+1;
        }
        else if(element['month']==3){
          mar=mar+1;
        }
        else if(element['month']==4){
          apr=apr+1;
        }



      });
     this.jan=jan;
     this.feb=feb;
     this.mar=mar;
     this.apr=apr;


     
     console.log("yyy");
     console.log(this.jan);
     console.log(this.feb);
    });


  }


}
