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
import{BothCommentPageComponent} from './doctor/commentsection/both-comment-page/both-comment-page.component'


const routes: Routes =[
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component:   ComponentsComponent},
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'examples/landing', component: LandingComponent },
    { path: 'examples/login', component:LoginComponent },
    { path: 'examples/profile', component: ProfileComponent },
    { path: 'user', component: LoginComponent },
    { path: 'home', component:HomeComponent },
    { path: 'doctorview', component: DoctorprofilepageComponent},
    { path: 'doctoradmin', component:DoctoradminpageComponent },
    { path: 'signup/sign-patient', component:SignPatientComponent },
    { path: 'signup/sign-doctor', component: SignDoctorComponent},
    { path: 'default', component: WaitingComponent},
    { path: 'patienthome', component:PatienthomeComponent },
    { path: 'appointment', component:AppointmentComponent },
    { path: 'appstep1', component:AppStep1Component },
    { path: 'appstep2', component:AppStep2Component },
    { path: 'appstep3', component:AppStep3Component },
    { path: 'byname', component:SelectbynameComponent },
    { path: 'bydisease', component:SelectbydiseaseComponent },
    { path: 'doctorname', component:SelectbynameComponent },
    { path: 'diseasename', component:SelectbydiseaseComponent },
    { path: 'searchdoctor', component:SearchdoctorComponent },
    { path: 'login', component: UserloginComponent},
    { path: 'admin', component:AdminComponent },
    { path: 'signup', component:SignupComponent },
    { path: 'doctorford', component:DoctorfordComponent},
    { path: 'confirmation', component:ConfirmationComponent},
    { path: 'test', component:TestComponent},
    { path: 'dlogin', component:DocLoginComponent},
    { path: 'plogin', component:PatLoginComponent},
   


{path:'master',component:DoctorprofilepageComponent},

{path:'comment',component:CommentComponent},
    { path: 'googlemap', component:GooglemapComponent},
    { path: 'star' , component:StarreviewComponent },
    
    
//     {path:'image' ,component:ImageComponent,children:[
//     {path:'upload',component:ImageComponent},//image/upload
//     {path:'list',component:ImageListComponent}   ,
      
// ]},

// {path:'notepad',component:NotepadComponent},
{path:'doctor/doctorprofilepage',component:DoctorprofilepageComponent},
{path:'adsearch',component:AdvancedsearchComponent}

 {path:'reaction',component:ReactionComponent},
 
 {path:'t',component:TComponent},
 
{path:'complain',component:AddComplainsComponent},
{path:'deletecomment',component:DeleteCommentComponent},
{path:'bothcomment',component:BothCommentPageComponent},
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
