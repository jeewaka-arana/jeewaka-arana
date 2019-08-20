import { Component, OnInit } from '@angular/core';
import{Doctor} from '../../core/models/doctor.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; //for firestore connection
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctorprofilepage',
  templateUrl: './doctorprofilepage.component.html',
  styleUrls: ['./doctorprofilepage.component.scss']
})


//view data from doctoradmin page
export class DoctorprofilepageComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Doctor>;
  Doctorview: Observable<Doctor[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Doctor>('Doctors');
  
    this.Doctorview = this.itemsCollection.valueChanges();



  }

  

  ngOnInit() {
   // window.document.body.style.backgroundImage='url(https://monodomo.com/free-wallpapers/ayurveda-wallpapers-desktop-background-For-Free-Wallpaper.jpg)';
  }

}
