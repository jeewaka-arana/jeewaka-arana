import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import{Observable} from 'rxjs/Observable';
import { map, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


//creating a interface to retrieve appointment details as a unit
export interface Appointment{
  Day:number,
  Month:number,
  Year:number,
  Time:string,
  Email:string,
  PatientName:string,
  PhoneNumber:number,
  DoctorName:string,
  DoctorId:string,

}

//interface to capture doc id
export interface Appointmentid extends Appointment { id: string; }


@Component({
  selector: 'app-viewappoinment',
  templateUrl: './viewappoinment.component.html',
  styleUrls: ['./viewappoinment.component.scss']
})
export class ViewappoinmentComponent implements OnInit {

verifyCol:AngularFirestoreCollection<Appointment>;
pat_verify:Observable<Appointmentid[]>;

ap_patientCol:AngularFirestoreCollection<Appointment>;
patObserve:Observable<Appointment[]>;

patdoc:AngularFirestoreDocument<Appointment>;

test:any;
show = false;
my_id;


  constructor(private afs:AngularFirestore,private router:Router) {

    this.my_id = router.getCurrentNavigation().finalUrl.toString().slice(16);
   }

  ngOnInit() {
    this.verifyCol = this.afs.collection<Appointment>('Doctors').doc(this.my_id).collection('Appointments');


this.pat_verify = this.verifyCol.snapshotChanges().pipe(
  map(actions => actions.map(a=>{
    const id = a.payload.doc.id;
    const data = a.payload.doc.data() as Appointment;


    return {id,...data};
  }))
)


this.ap_patientCol=this.afs.collection<Appointment>('Doctors').doc(this.my_id).collection('Appointments');
this.patObserve=this.ap_patientCol.valueChanges();


  }




  // accept(id:any,data:any){
  //   console.log(id);
    
  //   this.ap_patientCol.doc(id).set({PatientName:data.PatientName,Email:data.Email,PhoneNumber:data.PhoneNumber,Day:data.Day,Month:data.Month,Year:data.Year,Time:data.Time,Fulldate:data.Fulldate});
  //   this.afs.collection('Patients').doc('xfRi7PVladPoWuypNlMoGAGWRW93').collection('Appointments').doc(id).set({Day:data.Day,Month:data.Month,Year:data.Year,Time:data.Time,DoctorName:data.DoctorName,DoctorId:data.DoctorId,Fulldate:data.Fulldate})
  //   this.show=true;
   
  //   this.verifyCol.doc(id).delete();

  // }

  cancel(id:any){
    console.log(id);
    alert("Are you sure to cancel this appointment");
    this.afs.collection('Doctors').doc(this.my_id).collection('Appointments').doc(id).delete();
    this.show=true;
  }

  close() {
    this.show = false;
    
  }

}
