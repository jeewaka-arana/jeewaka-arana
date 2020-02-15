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
  @Input() userid: string;
  // @Input('year') year:any;


  myyear: any;
  jan: any;
  feb: any;
  mar: any;
  apr: any;
  may: any;
  jun: any;
  jul: any;
  aug: any;
  sep: any;
  oct: any;
  nov: any;
  dec: any;
  QueryCol: AngularFirestoreCollection;
  Query: Observable<any>;
  lineChartData: ChartDataSets[] = [
    {
      data: [
        this.jan,
        this.feb, 
        this.mar, 
        this.apr, 
        this.may, 
        this.jun, 
        this.jul,
        this.aug, 
        this.sep,
        this.oct,
        this.nov,
        this.dec

        
      ],
      label: 'Number Of Patient'
    },
  ];


  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#800000',
      backgroundColor: '#ff6600',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  constructor(private afs: AngularFirestore) {
    this.jan = 0;
    this.feb = 0;
    this.mar = 0;
    this.apr = 0;
    this.may = 0;
    this.jun = 0;
    this.jul = 0;
    this.aug = 0;
    this.sep = 0;
    this.oct = 0;
    this.nov = 0;
    this.dec = 0;

  }




  ngOnInit() {


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



  }



  yearFilter(data) {




    this.QueryCol = this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', +data));
    this.afs.collection('Doctors').doc(this.userid).collection('viewappoinment', ref => ref.where('year', '==', +data)).valueChanges().subscribe(result => {


      this.jan=0;
      this.feb=0;
      this.mar=0;
      this.apr=0;
      this.may=0;
      this.jun=0;
      this.jul=0;
      this.aug=0;
      this.sep=0;
      this.oct=0;
      this.nov=0;
      this.dec=0;
      

      result.forEach(element => {
        if (element['month'] == 1) {
          this.jan = this.jan + 1;
        }
        else if (element['month'] == 2) {
          this.feb = this.feb + 1;
        }
        else if (element['month'] == 3) {
          this.mar = this.mar + 1;
        }
        else if (element['month'] == 4) {
          this.apr = this.apr + 1;
        }


      });
      //  this.jan=this.jan;
      //  this.feb=this.feb;
      //  this.mar=this.mar;
      //  this.apr=this.apr;
      this.lineChartData = [
        {
          data: [
            this.jan,
            this.feb,
            this.mar,
            this.apr,

          ],
          label: 'Number Of Patient'
        },
      ];


      console.log("yyy");
      
      console.log(this.jan);
      console.log(this.feb);
      console.log(this.mar);



    });


  }


}
