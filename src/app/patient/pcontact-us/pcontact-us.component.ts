import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pcontact-us',
  templateUrl: './pcontact-us.component.html',
  styleUrls: ['./pcontact-us.component.scss']
})
export class PcontactUsComponent implements OnInit {
  my_id;
  constructor(private afs:AngularFirestore,private router:Router) {

    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(12);
    console.log(this.my_id);
   }

  ngOnInit() {
  }

}
