import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import * as _ from 'lodash';
import { Doctor } from 'app/core/models/doctor.model';

interface Post {
  Firstname:string;
  Lastname:string;
  Email:string;
  PhoneNumber:number;
  NIC:string;
  City:string;
  Position:string;
  RegistrationNumber:string;
  expyear: number;
}

@Component({
  selector: 'app-selectbyname',
  templateUrl: './selectbyname.component.html',
  styleUrls: ['./selectbyname.component.scss']
})
export class SelectbynameComponent implements OnInit {

  results: any[] = [];
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  str: any;
  page = 1;
  pageSize = 3;
  filteredNames: any[] = [];
  filters = {}
  letter = new FormControl('');
  farray: any[] =[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('Doctors',ref => ref.orderBy('Firstname')).valueChanges().subscribe(results => {
      this.results = results;
      this.applyFilters();
    })
  }
  applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters));
  }
  // filterName(property: string, letter: any){
  //   this.filters[property] = val => val.toLowerCase().includes(letter.toLowerCase())
  //   this.applyFilters();
  // }

  fname(property: string, letter){
    this.farray=[];
    for(var i = 0;i<this.filteredNames.length;i++) { 
          var v:string = this.filteredNames[i].Firstname ;
          var x:string = v.charAt(0);
          if (letter.value == x) { 
            console.log("yes") ;
            this.farray.push(this.filteredNames[i]);
         } 
         else {
          console.log("no"); 
       }
       }
   }
   selectAll(){
     this.farray=[];
     for(var i = 0;i<this.filteredNames.length;i++) { 
             this.farray.push(this.filteredNames[i]);
          } 
        }
   
   
}

   
  
