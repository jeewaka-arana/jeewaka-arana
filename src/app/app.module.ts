import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
<<<<<<< Updated upstream
=======
// import{NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { AgmCoreModule } from '@agm/core';

import{MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

//I keep the new line
>>>>>>> Stashed changes

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
import { SearchdoctorService } from './core/searchdoctor.service'


import { ReactiveFormsModule } from '@angular/forms';
import {CrudService} from './core/crud.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import{AngularFireDatabase, AngularFireDatabaseModule }from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WaitingComponent } from './signup/sign-doctor/waiting/waiting.component';
import {NotepadComponent} from './doctor/notepad/notepad.component';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { DoctorfordComponent } from './patient/appointment/doctorford/doctorford.component';
import { ConfirmationComponent } from './patient/appointment/confirmation/confirmation.component';

import { NoteditComponent } from './doctor/notedit/notedit.component';
import { AuthService } from './core/auth.service';
import { TestComponent } from './test/test.component';
import { DocLoginComponent } from './userlogin/doc-login/doc-login.component';
import { PatLoginComponent } from './userlogin/pat-login/pat-login.component';
<<<<<<< Updated upstream
import { DoclistComponent } from './admin/doclist/doclist.component';
import { EditprofileComponent } from './admin/editprofile/editprofile.component';
import { DocviewComponent } from './admin/doclist/docview/docview.component';
import { ImagelistComponent } from './admin/imagelist/imagelist.component';
import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
=======
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

import { DatePipe } from '@angular/common';

//I keep the new line
import { GooglemapComponent } from './patient/googlemap/googlemap.component';
import { StarreviewComponent } from './patient/starreview/starreview.component';
import { Test2Component } from './test2/test2.component';
import { DocAppoinmentComponent } from './doctor/Appoinment/doc-appoinment/doc-appoinment.component';
import { ViewappoinmentComponent } from './doctor/Appoinment/viewappoinment/viewappoinment.component';
import { HeremapComponent } from './patient/heremap/heremap.component';
import { TimePickerDirective } from './core/directives/time-picker.directive';
import { TimeComponent } from './test/time/time.component';
import { ShowpasswordDirective } from './core/directives/showpassword.directive';
import { UploadcertificateComponent } from './signup/sign-doctor/uploadcertificate/uploadcertificate.component';
import { UploadService } from './core/upload.service';
import { ReportComponent } from './doctor/report/report.component';

//I keep the new line
import { DoclistComponent } from '../app/admin/doclist/doclist.component';
import { EditprofileComponent } from '../app/admin/editprofile/editprofile.component';

// import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
import { DocacceptComponent } from './admin/docaccept/docaccept.component';
import {UploadFileService} from 'app/core/upload-file.service';
import { ArticlesComponent } from './admin/articles/articles.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { JackartComponent } from './jackart/jackart.component';




import { PopupComponent } from './core/components/popup/popup.component';
import { DropZoneDirective } from './core/directives/drop-zone.directive';



import { TimepickComponent } from './doctor/timepick/timepick.component';

import { IgxTimePickerModule } from "igniteui-angular";
import { FirstpageComponent } from './doctor/firstpage/firstpage.component';
import { Art2Component } from './jackart/art2/art2.component';
import { PfooterComponent } from './patient/pfooter/pfooter.component';
import { DfooterComponent } from './doctor/dfooter/dfooter.component';
import { AfooterComponent } from './admin/afooter/afooter.component';
import { PnavComponent } from './patient/pnav/pnav.component';
import { PostsComponent } from './posts/posts.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { PostsModule } from './posts/posts.module';
import { PhotoModule } from './core/models/photo/photo.module';
import { BlogComponent } from './blog/blog.component';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';
import { Blog2cComponent } from './blog2c/blog2c.component';
import { InsertimageComponent } from './insertimage/insertimage.component';









>>>>>>> Stashed changes


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
        HomeComponent,
        ImagesComponent,
        ImageComponent,
        ImageListComponent,
        DoctorfordComponent,
        ConfirmationComponent,
        NoteditComponent,
        TestComponent,
        DocLoginComponent,
        PatLoginComponent,
        DoclistComponent,
        EditprofileComponent,
        DocviewComponent,
        ImagelistComponent,
        AdminloginComponent

<<<<<<< Updated upstream
=======
        GooglemapComponent,
        StarreviewComponent,
        Test2Component,
        DocAppoinmentComponent,
        ViewappoinmentComponent,
        HeremapComponent,
        TimePickerDirective,
        TimeComponent,
        ShowpasswordDirective,
        UploadcertificateComponent,
        ReportComponent,
        ArticlesComponent,
        NotificationComponent,
        PopupComponent,
        DropZoneDirective,
     
        TimepickComponent,
        FirstpageComponent,
        JackartComponent,
        Art2Component,
        PfooterComponent,
        DfooterComponent,
        AfooterComponent,
        PnavComponent,
        PostsComponent,
        PostlistComponent,
        BlogComponent,
        BlogcreateComponent,
        Blog2cComponent,
        InsertimageComponent,
  
      
        
        
       
       
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        AngularFireModule.initializeApp(environment.firebaseConfig ),//initializing with firebase
        AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
      AngularFireDatabaseModule,
      
      

    ],
    providers: [CrudService,SearchdoctorService,AuthService],
    bootstrap: [AppComponent]
=======
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        /*MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatFormFieldModule,*/
        //   NgMultiSelectDropDownModule.forRoot(),

        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsKey
        }),
        PostsModule,
        PhotoModule,
    ],
    providers: [CrudService,SearchdoctorService,AuthService, DatePipe,UploadFileService],

    bootstrap: [AppComponent],
  
>>>>>>> Stashed changes
})
export class AppModule { }
