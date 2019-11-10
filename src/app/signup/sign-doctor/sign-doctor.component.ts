import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';



@Component({
  selector: 'app-sign-doctor',
  templateUrl: './sign-doctor.component.html',
  styleUrls: ['./sign-doctor.component.scss']
})
export class SignDoctorComponent implements OnInit {
 


  City: any = ['Colombo','Dehiwala-Mount Lavinia','Moratuwa','Jaffna', 'Negombo','Pita Kotte',' Sri Jayewardenepura Kotte','Kandy','Trincomalee','Kalmunai','Galle','Point Pedro','Batticaloa','Katunayaka','Valvedditturai'
  ,'Matara','Battaramulla South','Dambulla','Maharagama','Kotikawatta','Anuradhapura','Vavuniya','Kolonnawa','Hendala','Ratnapura','Badulla'	
  ,'Puttalam','Devinuwara','Welisara','Kalutara','Bentota','Matale','Homagama','Beruwala','Panadura','Mulleriyawa','Kandana','Ja Ela','Wattala'	
  ,'Peliyagoda','Kelaniya','Kurunegala','Nuwara Eliya','Gampola','Chilaw','Eravur Town','Hanwella Ihala','Weligama','Vakarai','Kataragama'	
  ,'Ambalangoda','Ampara','Kegalle','Hatton','Polonnaruwa','Kilinochchi','Tangalle','Monaragala','Wellawaya','Gampaha','Horana South'	
  ,'Wattegama','Minuwangoda','Horawala Junction','Kuliyapitiya'];

  authError: any;
  expyears:number;
  certificate : File;
  task: AngularFireUploadTask;
  constructor(private auth: AuthService,private storage: AngularFireStorage) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })

  }

   createUser(frm) {
    this.auth.createDoctor(frm.value);
  }
 
  uploadFile(file:File) {
    this.certificate=file;
    const filePath = `Certificates/${this.certificate.name}`;
    const ref = this.storage.ref(filePath);
    this.task = this.storage.upload(filePath, this.certificate);
  
  }

 
}