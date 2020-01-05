import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import * as _ from 'lodash';
import { Doctor } from 'app/core/models/doctor.model';

@Component({
  selector: 'app-app-step2',
  templateUrl: './app-step2.component.html',
  styleUrls: ['./app-step2.component.scss']
})
export class AppStep2Component implements OnInit {
x: any;
y: any;
m: any;
d: any;
p: any;
today: number = Date.now();
tomorrow:any = new Date();
tomorrow1:any = new Date();

  constructor() { }

  ngOnInit() {
    this.tomorrow.setDate(new Date().getDate()+1);
    this.tomorrow1.setDate(new Date().getDate()+2);
  }
    
  }

