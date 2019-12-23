import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ChartService} from 'app/core/models/chart.service';
import * as _ from 'lodash';
import * as Plotly from 'plotly.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  
  @ViewChild('chart') el: ElementRef;
  //
 



  //

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.basicChart()
  
    

   }
  
   basicChart() {
    const element = this.el.nativeElement
 
    const data = [{
      title:'bfhdbfhd',
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot( element, data, style )
  }


}
