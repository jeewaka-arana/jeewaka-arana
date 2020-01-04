import { Component,Input, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ChartService} from 'app/core/models/chart.service';
import * as _ from 'lodash';
// import * as Plotly from 'plotly.js';
import { Title } from '@angular/platform-browser';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Doctors } from '../doctoradminpage/doctoradminpage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
@Input() id:string;
 
  @ViewChild('chart') el: ElementRef;
  //
 
  Years:any=[2019,2020,2021,2022,2023,2024];


  QueryCol:AngularFirestoreCollection<Doctors>;
  Query:Observable<Doctors[]>
  JanCol:AngularFirestoreCollection;
  Jan:Observable<any[]>

 
  x: any;
  y:any;
  JanCount: any;

  //
 

  constructor(private chartService: ChartService,private router: Router,private afs:AngularFirestore) {
   
   }

  ngOnInit() {
    // this.basicChart()
  
    

   }
  
   specFilter(data:string){


    
     
  
    console.log("qqqqqqqq");
      // this.QueryCol=this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment', ref => ref.where('year', '==', data));
      this.QueryCol =this.afs.collection('Doctors').doc('Z0t2apggeUgPaBKoYFSrkd3bjlc2').collection('viewappoinment',ref=>ref.where('year','==',data));
     
      this.Query=this.QueryCol.valueChanges();
       this.Query.subscribe((data)=>{this.y=data.length});
                                                                                                     
    

//upto this
     
      this.JanCol=this.afs.collection('this.QueryCol',ref=>ref.where('month','==','January'));
      this.Jan=this.JanCol.valueChanges();
      console.log("two");
      this.Jan.subscribe((data)=>{this.x = data.length});

      console.log(this.x);
    
  

    
 }
  //  basicChart() {
  //   const element = this.el.nativeElement
 
  //   const data = [{
  //     title:'bfhdbfhd',
  //     x: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
  //     y: ['JanCount','10','12','2','5','9','11','12','13','5','3','9']
  //   }]

  //   const style = {
  //     margin: { t: 0 }
  //   }

  //   Plotly.plot( element, data, style )
  // }


}
