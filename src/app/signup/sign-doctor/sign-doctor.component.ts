import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { CrudService } from 'app/core/crud.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-doctor',
  templateUrl: './sign-doctor.component.html',
  styleUrls: ['./sign-doctor.component.scss']

})
export class SignDoctorComponent implements OnInit {
 
Specialist:any=['Ayurvedic Hospital','Arthritis','Beauty Spa' ,'cancer','Chronic Ulcers','Cholestrol' , 'Diabetic Ulcers','Diabetes Mellitus', 'ENT'
                  ,'Fistula', 'Gynaecological Disorders' ,'Gastritis' ,'Hemorrhoids' ,'Hypertension', 'Neurological Disorders', 'Orthopedics' 
                  ,'Obesity','Paralysis / Hemiplagia', 'Pediatrics','Spinal Disorders','Skin Disorders' ,'Urinary Calculi','Urinary Calculi','Urinary Disease'
                  ,'Varicose Venis','I have a medical hospital for all diseases'

];

  City: any = ['Colombo','Dehiwala-Mount Lavinia','Moratuwa','Jaffna', 'Negombo','Pita Kotte',' Sri Jayewardenepura Kotte','Kandy','Trincomalee','Kalmunai','Galle','Point Pedro','Batticaloa','Katunayaka','Valvedditturai'
  ,'Matara','Battaramulla South','Dambulla','Maharagama','Kotikawatta','Anuradhapura','Vavuniya','Kolonnawa','Hendala','Ratnapura','Badulla'	
  ,'Puttalam','Devinuwara','Welisara','Kalutara','Bentota','Matale','Homagama','Beruwala','Panadura','Mulleriyawa','Kandana','Ja Ela','Wattala'	
  ,'Peliyagoda','Kelaniya','Kurunegala','Nuwara Eliya','Gampola','Chilaw','Eravur Town','Hanwella Ihala','Weligama','Vakarai','Kataragama'	
  ,'Ambalangoda','Ampara','Kegalle','Hatton','Polonnaruwa','Kilinochchi','Tangalle','Monaragala','Wellawaya','Gampaha','Horana'	
  ,'Wattegama','Minuwangoda','Horawala Junction','Kuliyapitiya'];

  authError: any;
  expyears:number;
  certificate : File;

  //file upload>>>>>
   // Main task 
   task: AngularFireUploadTask;

   // Progress monitoring
   percentage: Observable<number>;
 
   snapshot: Observable<any>;
 
   // Download URL
   certificateURL: Observable<string>;
 
   // State for dropzone CSS toggling
   isHovering: boolean;

  constructor(private auth: AuthService,private storage: AngularFireStorage,private crud:CrudService,private db: AngularFirestore,private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })

  }

   createUser(frm) {
   this.crud.createDoctor(frm.value);
   this.router.navigate(['/default']);
  //  this.auth.createDoctor(frm.value);
  //  this.crud.createDoctor(frm.value);
  }
 

  //file upload >>>>>>


   toggleHover(event: boolean) {
     this.isHovering = event;
   }
 
 
   startUpload(event: FileList) {
     // The File object
     const file = event.item(0)
 
     // Client-side validation example
    //  if (file.type.split('/')[0] !== 'file') { 
    //    console.error('unsupported file type :( ')
    //    return;
    //  }
 
     // The storage path
     const path = `Certificates/${new Date().getTime()}_${file.name}`;
 
     // Totally optional metadata
     const customMetadata = { app: 'Verification Certificate' };
 
     // The main task
     this.task = this.storage.upload(path, file, { customMetadata })
 
     // Progress monitoring
     this.percentage = this.task.percentageChanges();
     this.snapshot   = this.task.snapshotChanges()
 
     // The file's download URL
    //  this.certificateURL = this.task.downloadURL(); 
    
   }
 
   // Determines if the upload task is active
   isActive(snapshot) {
     return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
   }


   checkpassword(password:string,confPassword:string){

    if(password==confPassword){
      return true;
    }
    else{
      return false;
    }
  
  }


 
}