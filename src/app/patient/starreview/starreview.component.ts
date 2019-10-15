import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { StarService } from '../../core/star.service';
// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Rx'
import { observable } from 'rxjs';
import { Star } from 'app/core/models/star.model';


export interface Star {
  patientId: any;
  doctorId: any;
  value: number;
}

@Component({
  selector: 'app-starreview',
  templateUrl: './starreview.component.html',
  styleUrls: ['./starreview.component.scss']
})
export class StarreviewComponent implements OnInit {

  @Input() patientId;
  @Input() doctorId;
  stars: Observable<any>;
  avgRating: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.stars = this.getDoctorStars(this.doctorId)

    this.avgRating = this.stars.map(arr => {
      const ratings = arr.map(v => v.value)
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    })
  }

  starHandler(value) {
    this.setStar(this.patientId, this.doctorId, value)
  }

  getPatientStars(patientId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('patientId', '==', patientId) );
    return starsRef.valueChanges();
  }
   // Get all stars that belog to a Movie
   getDoctorStars(doctorId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('doctorId', '==', doctorId) );
    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(patientId, doctorId, value) {
    // Star document data
    const star: Star = { patientId, doctorId, value };

    // Custom doc ID for relationship
    const starPath = 'stars/${star.patientId}_${star.doctorId}';

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star)
  }

}
