import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
// import{NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { AgmCoreModule } from '@agm/core';





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
import { SearchdoctorService } from './core/searchdoctor.service';

// import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {CrudService} from './core/crud.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage';
import{AngularFireDatabase, AngularFireDatabaseModule }from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WaitingComponent } from './signup/sign-doctor/waiting/waiting.component';

import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';

import { DoctorfordComponent } from './patient/appointment/doctorford/doctorford.component';
import { ConfirmationComponent } from './patient/appointment/confirmation/confirmation.component';
import { from } from 'rxjs';


// import { ImagesComponent } from './images/images.component';
// import { ImageComponent } from './images/image/image.component';
// import { ImageListComponent } from './images/image-list/image-list.component';

// import { NoteditComponent } from './doctor/notedit/notedit.component';
import { AuthService } from './core/auth.service';
import { TestComponent } from './test/test.component';
import { DocLoginComponent } from './userlogin/doc-login/doc-login.component';
import { PatLoginComponent } from './userlogin/pat-login/pat-login.component';
import { AdvancedsearchComponent } from './patient/searchdoctor/advancedsearch/advancedsearch.component';



import { UploadTaskComponent } from './doctor/pictures/upload-task/upload-task.component';
import { CommentComponent } from './doctor/commentsection/comment/comment.component';


 import { ReactionComponent } from './doctor/reaction/reaction/reaction.component';
import { ProfileComponent } from './doctor/pictures/profile/profile.component';



import { TComponent } from './doctor/t/t.component';
import { VideoComponent } from './doctor/pictures/video/video.component';
import { UploadVideoComponent } from './doctor/pictures/upload-video/upload-video.component';

import { MynavComponent } from './doctor/mynav/mynav.component';
import { GetComplainAdminComponent } from './doctor/get-complain-admin/get-complain-admin.component';
import { AddComplainsComponent } from './doctor/add-complains/add-complains.component';
import { DeleteCommentComponent } from './doctor/commentsection/delete-comment/delete-comment.component';
import { BothCommentPageComponent } from './doctor/commentsection/both-comment-page/both-comment-page.component';

import{DatePipe} from '@angular/common';



import { GooglemapComponent } from './patient/googlemap/googlemap.component';
import { StarreviewComponent } from './patient/starreview/starreview.component';
import { HeremapComponent } from './patient/heremap/heremap.component';



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
        HomeComponent,
      
        DoctorfordComponent,
        ConfirmationComponent,
     
        TestComponent,
        DocLoginComponent,
        PatLoginComponent,
        
        UploadTaskComponent,
        CommentComponent,
    
       
        ReactionComponent,
       
        ProfileComponent,
       
        
       
    
       
        TComponent,
       
        VideoComponent,
       
        UploadVideoComponent,
       
      
       
        MynavComponent,
       
        GetComplainAdminComponent,
       
        AddComplainsComponent,
       
        DeleteCommentComponent,
       
        BothCommentPageComponent,
       
     
       
       
    

      
     
       
       
     
       
    
        AdvancedsearchComponent,

        GooglemapComponent,
        StarreviewComponent,
        HeremapComponent,
     
    ],
    imports: [
        BrowserAnimationsModule, 
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig ),//initializing with firebase
        AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
      AngularFireDatabaseModule,
    //   NgMultiSelectDropDownModule.forRoot(),
     
  

   
      BrowserModule,
    AgmCoreModule.forRoot({
        apiKey: environment.googleMapsKey
    })
   
     
    ],
    providers: [CrudService,SearchdoctorService,AuthService, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
