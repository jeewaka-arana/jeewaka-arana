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
import { PatienthomeComponent } from './patient/patienthome/patienthome.component';
import { AppointmentComponent } from './patient/appointment/appointment.component';
import { AppStep2Component } from './patient/appointment/app-step2/app-step2.component';
import { AppStep1Component } from './patient/appointment/app-step1/app-step1.component';
import { AppStep3Component } from './patient/appointment/app-step3/app-step3.component';
import { SelectbynameComponent } from './patient/appointment/selectbyname/selectbyname.component';
import { SelectbydiseaseComponent } from './patient/appointment/selectbydisease/selectbydisease.component';
import { SearchdoctorComponent } from './patient/searchdoctor/searchdoctor.component';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DoctoradminpageComponent,
        DoctorprofilepageComponent,
        PatienthomeComponent,
        AppointmentComponent,
        AppStep2Component,
        AppStep1Component,
        AppStep3Component,
        SelectbynameComponent,
        SelectbydiseaseComponent,
        SearchdoctorComponent,
        
     
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
