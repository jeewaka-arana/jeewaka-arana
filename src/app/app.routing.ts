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



const routes: Routes =[
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component:   ComponentsComponent},
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'examples/landing', component: LandingComponent },
    { path: 'examples/login', component:LoginComponent },
    { path: 'examples/profile', component: ProfileComponent },
    { path: 'user', component: LoginComponent },
    { path: 'home', component: ComponentsComponent },
    { path: 'doctorview', component: DoctorprofilepageComponent},
    { path: 'doctoradmin', component:DoctoradminpageComponent },
    { path: 'signup/sign-patient', component:SignPatientComponent },
    { path: 'signup/sign-doctor', component: SignDoctorComponent},
    { path: 'default', component: WaitingComponent}

    
];

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
