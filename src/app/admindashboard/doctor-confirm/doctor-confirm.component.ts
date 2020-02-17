import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService } from 'app/core/auth.service';
import { Router } from '@angular/router';

export interface Doctor{
  Userid:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:number,
    nic:string,
    city:string,
    years:string,
    position:string,
    regnumber:string,
    
}


export interface Doctorid extends Doctor{
  id: string;
}

@Component({
  selector: 'app-doctor-confirm',
  templateUrl: './doctor-confirm.component.html',
  styleUrls: ['./doctor-confirm.component.scss']
})
export class DoctorConfirmComponent implements OnInit {
  verifyCol:AngularFirestoreCollection<Doctor>;
  doc_verify:Observable<Doctorid[]>;
my_id:string;
  constructor(private afs:AngularFirestore,private auth:AuthService,private router:Router) {
    this.my_id=router.getCurrentNavigation().finalUrl.toString().slice(12);


    this.verifyCol = this.afs.collection<Doctor>('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('DoctorsConf');
    this.doc_verify = this.verifyCol.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as Doctor;
    
    
        return {id,...data};
      }))
    )


   }

  ngOnInit() {
  }

  accept(data:any,id:any){
  
    this.auth.createDoctor(data);
    this.verifyCol.doc(id).delete();

  }

  reject(data:any,id:any){
     if(confirm("Are you sure you want to reject")){
this.afs.collection('admin').doc('Ef5vRYcXM4Rhmc3kvXaJLFN8q9v1').collection('RejectedDoctors').add(data);
this.verifyCol.doc(id).delete();
     // this.verifyCol.doc(id).set({tag:"Rejected"},{merge:true});
     }
    
  }

}
