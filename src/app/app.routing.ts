import { NgModule } from '@angular/core';
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
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { DoctorfordComponent } from './patient/appointment/doctorford/doctorford.component';
import { ConfirmationComponent } from './patient/appointment/confirmation/confirmation.component';
import{NotepadComponent}from './doctor/notepad/notepad.component';
import{NoteditComponent} from './doctor/notedit/notedit.component';
import { TestComponent } from './test/test.component';
import { DocLoginComponent } from './userlogin/doc-login/doc-login.component';
import { PatLoginComponent } from './userlogin/pat-login/pat-login.component';
import { DoclistComponent } from './admin/doclist/doclist.component';
import { EditprofileComponent } from './admin/editprofile/editprofile.component';
<<<<<<< Updated upstream
import { DocviewComponent } from './admin/doclist/docview/docview.component';
import { ImagelistComponent } from './admin/imagelist/imagelist.component';
import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
=======
//import { DocviewComponent } from './admin/doclist/docview/docview.component';
//import { ImagelistComponent } from './admin/imagelist/imagelist.component';
//import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
import { DocacceptComponent } from './admin/docaccept/docaccept.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { NotificationComponent } from './admin/notification/notification.component';
import{TimepickComponent} from '../app/doctor/timepick/timepick.component';
import{FirstpageComponent} from '../app/doctor/firstpage/firstpage.component';
import { JackartComponent } from './jackart/jackart.component';
import { Art2Component } from './jackart/art2/art2.component';
import { PostsComponent } from './posts/posts.component';
//import{AboutUsComponent} from '../app/components/about-us/about-us.component';
//import{ ContactUsComponent} from '../app/components/contact-us/contact-us.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { BlogComponent } from './blog/blog.component';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';
import { Blog2cComponent } from './blog2c/blog2c.component';
>>>>>>> Stashed changes

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
    { path: 'admin', component:AdminComponent ,children:[
        
        { path: 'imagelist', component:ImageListComponent }
        // {path:'editprofile',component:EditprofileComponent}

    ]},
    {path:'admin/editprofile',component:EditprofileComponent},
    {path:'adminlogin',component:AdminloginComponent},
    { path: 'admin/doclist', component:DoclistComponent },
    { path: 'signup', component:SignupComponent },
    { path: 'doctorford', component:DoctorfordComponent},
    { path: 'confirmation', component:ConfirmationComponent},
    { path: 'test', component:TestComponent},
    { path: 'dlogin', component:DocLoginComponent},
    { path: 'plogin', component:PatLoginComponent},
<<<<<<< Updated upstream
    {path:'image' ,component:ImageComponent,children:[
    {path:'upload',component:ImageComponent},//image/upload
    {path:'list',component:ImageListComponent}, 
    
    {path:'docview',component:DocviewComponent}
]},
=======
    { path: 'jackart', component:JackartComponent},
    { path: 'jackart/art2', component:Art2Component},
    { path: 'posts', component:PostsComponent},
    { path: 'postlist', component:PostlistComponent},
    { path: 'blog', component:BlogComponent},
    { path: 'blogc', component:BlogcreateComponent},
    { path: 'blog2c', component:Blog2cComponent},   


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
 
{path:'complain',component:AddComplainsComponent},
{path:'deletecomment',component:DeleteCommentComponent},
{path:'bothcomment',component:BothCommentPageComponent},
{path:'docAppoinment',component:DocAppoinmentComponent},
{path:'docAppoinment/:id',component:DocAppoinmentComponent},
{path:'viewappoinment',component:ViewappoinmentComponent},
{path:'timePicker',component:TimeComponent},
{path:'report',component:ReportComponent},
{path:'articles',component:ArticlesComponent},
{path:'admin/notification',component:NotificationComponent},



{path:'time',component:TimepickComponent},
{path:'fpage',component:FirstpageComponent},
>>>>>>> Stashed changes

{path:'notepad',component:NotepadComponent},
{path:'doctor/doctorprofilepage',component:DoctorprofilepageComponent}

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
