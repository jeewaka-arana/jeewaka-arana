import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DoctorprofilepageComponent } from './doctor/doctorprofilepage/doctorprofilepage.component';
import{DoctoradminpageComponent }from './doctor/doctoradminpage/doctoradminpage.component';
import { SignDoctorComponent } from './signup/sign-doctor/sign-doctor.component';
import {SignPatientComponent} from './signup/sign-patient/sign-patient.component';
import{WaitingComponent} from './signup/sign-doctor/waiting/waiting.component';
import {PatienthomeComponent} from './patient/patienthome/patienthome.component';
import { AppointmentComponent } from './patient/appointment/appointment.component';
import { AppStep1Component } from './patient/appointment/app-step1/app-step1.component';
import { AppStep2Component } from './patient/appointment/app-step2/app-step2.component';
import { AppStep3Component } from './patient/appointment/app-step3/app-step3.component';
import { ApplistComponent } from './patient/applist/applist.component';
import { SelectbynameComponent } from './patient/appointment/selectbyname/selectbyname.component';
import { SelectbydiseaseComponent } from './patient/appointment/selectbydisease/selectbydisease.component';
import { SearchdoctorComponent } from './patient/searchdoctor/searchdoctor.component';
import{AdminComponent} from './admin/admin.component';

import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { DoctorfordComponent } from './patient/appointment/doctorford/doctorford.component';
import { ConfirmationComponent } from './patient/appointment/confirmation/confirmation.component';


import { TestComponent } from './test/test.component';
import { DocLoginComponent } from './userlogin/doc-login/doc-login.component';
import { PatLoginComponent } from './userlogin/pat-login/pat-login.component';
//

import{CommentComponent} from './doctor/commentsection/comment/comment.component';

import { ReactionComponent } from './doctor/reaction/reaction/reaction.component';
import { AdvancedsearchComponent } from './patient/searchdoctor/advancedsearch/advancedsearch.component';
import { GooglemapComponent } from './patient/googlemap/googlemap.component';
import { StarreviewComponent } from './patient/starreview/starreview.component';



import { from } from 'rxjs';

import{TComponent} from './doctor/t/t.component';

import { MynavComponent } from './doctor/mynav/mynav.component';
import{AddComplainsComponent} from './doctor/add-complains/add-complains.component';
import{DeleteCommentComponent} from './doctor/commentsection/delete-comment/delete-comment.component';
import { Test2Component } from './test2/test2.component';
import{BothCommentPageComponent} from './doctor/commentsection/both-comment-page/both-comment-page.component'
import{DocAppoinmentComponent}  from './doctor/Appoinment/doc-appoinment/doc-appoinment.component';
import{ViewappoinmentComponent} from './doctor/Appoinment/viewappoinment/viewappoinment.component';
import { HeremapComponent } from './patient/heremap/heremap.component';

import { ReportComponent } from './doctor/report/report.component';

import { DoclistComponent } from './admin/doclist/doclist.component';
import { EditprofileComponent } from './admin/editprofile/editprofile.component';
//import { DocviewComponent } from './admin/doclist/docview/docview.component';
//import { ImagelistComponent } from './admin/imagelist/imagelist.component';
//import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
import { DocacceptComponent } from './admin/docaccept/docaccept.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { TimepickerComponent } from './doctor/timepicker/timepicker.component';
import{FirstpageComponent} from '../app/doctor/firstpage/firstpage.component';
import{AboutUsComponent} from '../app/components/about-us/about-us.component';
import{ ContactUsComponent} from '../app/components/contact-us/contact-us.component';
import { PcontactUsComponent } from './patient/pcontact-us/pcontact-us.component';
import { PaboutUsComponent } from './patient/pabout-us/pabout-us.component';
import{SecondpageComponent}from './doctor/secondpage/secondpage.component';
import { AdminLoginComponent } from './userlogin/admin-login/admin-login.component';
import {AdmindashboardComponent} from '../app/admindashboard/admindashboard.component';

import { FirebasetestComponent } from './firebasetest/firebasetest.component';

//import{DlinechartComponent}from './doctor/dlinechart/dlinechart.component';
import{DlinechartComponent}from './doctor/dlinechart/dlinechart.component';
import{ComplainsComponent} from '../app/admindashboard/complains/complains.component';
import{HandleaccountsComponent} from '../app/admindashboard/handleaccounts/handleaccounts.component';


import { SlotsComponent } from './patient/appointment/slots/slots.component';
import { TimepickComponent } from './doctor/timepick/timepick.component';
import {DoctorConfirmComponent} from './admindashboard/doctor-confirm/doctor-confirm.component'

//notification testing
import {PnavComponent} from './patient/pnav/pnav.component';


const routes: Routes =[
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component:   ComponentsComponent},
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'examples/landing', component: LandingComponent },
    { path: 'examples/login', component:LoginComponent },
    { path: 'examples/profile', component: ProfileComponent },
    { path: 'user', component: LoginComponent },
    { path: 'home', component:HomeComponent },
    { path: 'doctorview/:id', component: DoctorprofilepageComponent},
    { path: 'doctorview', component: DoctorprofilepageComponent},
    { path: 'doctoradmin', component:DoctoradminpageComponent },
    { path: 'doctoradmin/:id', component:DoctoradminpageComponent },
    {path:'report/:id',component:ReportComponent},
    { path: 'signup/sign-patient', component:SignPatientComponent },
    { path: 'signup/sign-doctor', component: SignDoctorComponent},
    { path: 'default', component: WaitingComponent},
    { path: 'patienthome', component:PatienthomeComponent },
    { path: 'appointment', component:AppointmentComponent },
    { path: 'appstep1', component:AppStep1Component },
    { path: 'appstep2', component:AppStep2Component },
    { path: 'appstep3', component:AppStep3Component },
    { path: 'applist/:id', component:ApplistComponent },
    { path: 'byname', component:SelectbynameComponent },
    { path: 'bydisease', component:SelectbydiseaseComponent },
    { path: 'doctorname', component:SelectbynameComponent },
    { path: 'diseasename', component:SelectbydiseaseComponent },
    { path: 'searchdoctor', component:SearchdoctorComponent },
    { path: 'searchdoctor/:id', component:SearchdoctorComponent },
    { path: 'login', component: UserloginComponent},
    { path: 'admin', component:AdminComponent },
    { path: 'alogin', component:AdminLoginComponent },
    {path:'timeslot',component: SlotsComponent},
    { path: 'appstep3/:id/:date/:time', component:AppStep3Component },
    { path: 'appstep2/:id', component:AppStep2Component },
    { path: 'admin', component:AdminComponent ,children:[
        
     //   { path: 'imagelist', component:ImageListComponent }
        // {path:'editprofile',component:EditprofileComponent}

    ]},
    {path:'admin/docaccept',component:DocacceptComponent},
    {path:'admin/editprofile',component:EditprofileComponent},
   // {path:'adminlogin',component:AdminloginComponent},
    { path: 'admin/doclist', component:DoclistComponent },
    { path: 'signup', component:SignupComponent },
    { path: 'doctorford', component:DoctorfordComponent},
    { path: 'confirmation', component:ConfirmationComponent},
    { path: 'here/:City', component:HeremapComponent},
    { path: 'test', component:TestComponent},
    { path: 'test2', component:Test2Component},
    { path: 'dlogin', component:DocLoginComponent},
    { path: 'plogin', component:PatLoginComponent},
    {path:'report/:id',component:ReportComponent},

    //testing
    {path:'nav',component:PnavComponent},
   


{path:'master',component:DoctorprofilepageComponent},

{path:'comment',component:CommentComponent},
    { path: 'googlemap/:City', component:GooglemapComponent},
    { path: 'star' , component:StarreviewComponent },
    
    
//     {path:'image' ,component:ImageComponent,children:[
//     {path:'upload',component:ImageComponent},//image/upload
//     {path:'list',component:ImageListComponent}   ,
      
// ]},

// {path:'notepad',component:NotepadComponent},
{path:'doctor/doctorprofilepage',component:DoctorprofilepageComponent},
{path:'adsearch',component:AdvancedsearchComponent},

 {path:'reaction',component:ReactionComponent},
 
 {path:'t',component:TComponent},
 
//{path:'complain',component:AddComplainsComponent},
{path:'complain/:id',component:AddComplainsComponent},
{path:'deletecomment',component:DeleteCommentComponent},
{path:'bothcomment',component:BothCommentPageComponent},
{path:'docAppoinment',component:DocAppoinmentComponent},
{path:'docAppoinment/:id',component:DocAppoinmentComponent},
{path:'viewappoinment',component:ViewappoinmentComponent},
{path:'viewappoinment/:id',component:ViewappoinmentComponent},
{path:'report',component:ReportComponent},
{path:'articles',component:ArticlesComponent},
{path:'admin/notification',component:NotificationComponent},


{path:'time',component:TimepickerComponent},

{path:'timetest',component:TimepickComponent},
{path:'fpage',component:FirstpageComponent},

{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent},
{path:'pcontactUs',component:PcontactUsComponent},
// {path:'paboutUs',component:PaboutUsComponent},
{path:'spage',component:SecondpageComponent},
{path:'spage/:id',component:SecondpageComponent},
{path:'admindash',component:AdmindashboardComponent},

//{path:'dlinechart' ,component:DlinechartComponent}
{path:'dlinechart' ,component:DlinechartComponent},
{path:'admincomplain',component:ComplainsComponent},
{path:'handleAccount',component:HandleaccountsComponent},
{path:'confirmdoc',component:DoctorConfirmComponent}
    ]


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
