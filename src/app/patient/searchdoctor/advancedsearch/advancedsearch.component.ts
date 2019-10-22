import { Component, OnInit } from '@angular/core';
 import {SearchdoctorService} from '../../../core/searchdoctor.service';
import { AuthService } from 'app/core/auth.service';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Doctors{
  
}
@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.scss']
})
export class AdvancedsearchComponent implements OnInit {
  my_test:string; 
  Gender:string;

  postsCol:AngularFirestoreCollection< Doctors>;
  posts:Observable< Doctors[]>;
  post$:any;


  QueryCol:AngularFirestoreCollection<Doctors>;
  Query:Observable<Doctors[]>



  constructor(private SearchDoctorService:SearchdoctorService,private fauth:AngularFireAuth,private afs:AngularFirestore) {
    
    this.postsCol=this.afs.collection('Doctors');
    this.posts=this.postsCol.valueChanges();
  //   this.postsCol.doc('sJ8197FwroSuZepVVnEN4DD9UA13').ref.get().then((doc)=>{
  //     this.post$=doc.data();
  //  });
    

  // this.QueryCol=afs.collection('Doctors', ref => ref.where('Specialist', '==', 'Cancer'));
  // this.Query=this.QueryCol.valueChanges();
    
   }

  ngOnInit() {
  }

  specFilter(spec:string){
    this.QueryCol=this.afs.collection('Doctors', ref => ref.where('Specialist', '==', spec));
  this.Query=this.QueryCol.valueChanges();
  }


  // checkGender(gender:string){
    
  //   if (gender=="male"){
  //    console.log("male");
      
  //   }

  //   else{
  //     this.Gender="Female";
      
  //   }
  // }


  test(data:string)
  {
    this.my_test=data;
  }


  

}
