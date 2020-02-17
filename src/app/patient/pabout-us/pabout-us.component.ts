import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pabout-us',
  templateUrl: './pabout-us.component.html',
  styleUrls: ['./pabout-us.component.scss']
})
export class PaboutUsComponent implements OnInit {
  my_id;
  constructor(private afs:AngularFirestore,private router:Router) {

    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(10);
    console.log(this.my_id);
   }

  ngOnInit() {
  }

}
