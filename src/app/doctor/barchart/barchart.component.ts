import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
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
  barChartData: ChartDataSets[] = [
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





  
  barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartColors: Color[] = [
    {
      borderColor: '#800000',
      backgroundColor: '#f96332',
    },
  ];

  barChartLegend = true;
  //barChartPlugins = [];
  barChartType : ChartType = 'bar';
  barChartPlugins = [];

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




    this.QueryCol = this.afs.collection('Doctors').doc(this.userid).collection('Appointments', ref => ref.where('Year', '==', +data));
    this.afs.collection('Doctors').doc(this.userid).collection('Appointments', ref => ref.where('Year', '==', +data)).valueChanges().subscribe(result => {


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
        if (element['Month'] == 1) {
          this.jan = this.jan + 1;
        }
        else if (element['Month'] == 2) {
          this.feb = this.feb + 1;
        }
        else if (element['Month'] == 3) {
          this.mar = this.mar + 1;
        }
        else if (element['Month'] == 4) {
          this.apr = this.apr + 1;
        }

        else if (element['Month'] == 5) {
          this.may = this.may + 1;
        }
        else if (element['Month'] == 6) {
          this.jun = this.jun + 1;
        }
        else if (element['Month'] == 7) {
          this.jul = this.jul + 1;
        }
        else if (element['Month'] == 8) {
          this.aug = this.aug + 1;
        }
        else if (element['Month'] == 9) {
          this.sep = this.sep + 1;
        }

        else if (element['Month'] == 10) {
          this.oct = this.oct + 1;
        }
        else if (element['Month'] == 11) {
          this.nov = this.nov + 1;
        }
        else if (element['Month'] == 12) {
          this.dec = this.dec + 1;
        }
        


      });
      //  this.jan=this.jan;
      //  this.feb=this.feb;
      //  this.mar=this.mar;
      //  this.apr=this.apr;
      this.barChartData = [
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


      console.log("yyy");
      
      console.log(this.jan);
      console.log(this.feb);
      console.log(this.mar);



    });


  }


}
