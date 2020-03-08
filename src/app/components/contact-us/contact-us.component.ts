import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


import * as Rellax from 'rellax';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    
    `]
})
export class ContactUsComponent implements OnInit {

 
  constructor(private afs:AngularFirestore,private fb:FormBuilder) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

  
    
    
    


  }



 
}
