import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import{Observable} from 'rxjs/Observable';

interface Order{
  Pname:string;
  date:string;
  time:string;
  tp:string;
  disease:string;
}


@Component({
  selector: 'app-viewappoinment',
  templateUrl: './viewappoinment.component.html',
  styleUrls: ['./viewappoinment.component.scss']
})
export class ViewappoinmentComponent implements OnInit {

appCol:AngularFirestoreCollection<Order>;
apps:Observable<Order[]>;


  constructor(private afs:AngularFirestore) {


   }

  ngOnInit() {
this.appCol = this.afs.collection('Doctors').doc('sJ8197FwroSuZepVVnEN4DD9UA13').collection('viewappoinment');
this.apps = this.appCol.valueChanges();

  }

}
