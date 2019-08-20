import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DoctoradminpageComponent } from './doctor/doctoradminpage/doctoradminpage.component';
import { DoctorprofilepageComponent } from './doctor/doctorprofilepage/doctorprofilepage.component';
import { SignupComponent } from './signup/signup.component';
import { SignPatientComponent } from './signup/sign-patient/sign-patient.component';
import { SignDoctorComponent } from './signup/sign-doctor/sign-doctor.component';
import { PatienthomeComponent } from './patient/patienthome/patienthome.component';
import { AppointmentComponent } from './patient/appointment/appointment.component';
import { AppStep2Component } from './patient/appointment/app-step2/app-step2.component';
import { AppStep1Component } from './patient/appointment/app-step1/app-step1.component';
import { AppStep3Component } from './patient/appointment/app-step3/app-step3.component';
import { SelectbynameComponent } from './patient/appointment/selectbyname/selectbyname.component';
import { SelectbydiseaseComponent } from './patient/appointment/selectbydisease/selectbydisease.component';
import { SearchdoctorComponent } from './patient/searchdoctor/searchdoctor.component';


import { ReactiveFormsModule } from '@angular/forms';
import {CrudService} from './core/crud.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WaitingComponent } from './signup/sign-doctor/waiting/waiting.component';
import {NotepadComponent} from './doctor/notepad/notepad.component';
import { AdminComponent } from './admin/admin.component';

import { UserloginComponent } from './userlogin/userlogin.component';





@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DoctoradminpageComponent,
        DoctorprofilepageComponent,
        SignupComponent,
        SignPatientComponent,
        SignDoctorComponent,
        WaitingComponent,
        NotepadComponent,
        PatienthomeComponent,
        AppointmentComponent,
        AppStep2Component,
        AppStep1Component,
        AppStep3Component,
        SelectbynameComponent,
        SelectbydiseaseComponent,
        SearchdoctorComponent,
        UserloginComponent,
      AdminComponent,
     
     
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig ),//initializing with firebase
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
      
    ],
    providers: [CrudService],
    bootstrap: [AppComponent]
})
export class AppModule { }
