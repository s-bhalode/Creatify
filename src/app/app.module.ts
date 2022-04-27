import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { RecruiterDashboardComponent } from './components/recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { DesignerDashboardComponent } from './components/designer/designer-dashboard/designer-dashboard.component';
import {NavbarComponent} from './components/features/navbar/navbar.component';
import { RecruiterActivityComponent } from './components/recruiter/recruiter-activity/recruiter-activity.component';
import { RecruiterPostComponent } from './components/recruiter/recruiter-post/recruiter-post.component';
import { RecruiterNetworkComponent } from './components/recruiter/recruiter-network/recruiter-network.component';
import { DesignerNetworkComponent } from './components/designer/designer-network/designer-network.component';
import { DesignerActivityComponent } from './components/designer/designer-activity/designer-activity.component';
import { DesignerPostComponent } from './components/designer/designer-post/designer-post.component';
import { DesignerJobsComponent } from './components/designer/designer-jobs/designer-jobs.component';
import { DesignerProfileComponent } from './components/designer/designer-profile/designer-profile.component';
import { DesignerProfileSettingsComponent } from './components/designer/designer-profile-settings/designer-profile-settings.component';
import { RecruiterProfileComponent } from './components/recruiter/recruiter-profile/recruiter-profile.component';
import { RecruiterProfileSettingsComponent } from './components/recruiter/recruiter-profile-settings/recruiter-profile-settings.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminProfileSettingsComponent } from './components/admin/admin-profile-settings/admin-profile-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminDashboardComponent,
    RecruiterDashboardComponent,
    DesignerDashboardComponent,
    RecruiterActivityComponent,
    RecruiterPostComponent,
    RecruiterNetworkComponent,
    DesignerNetworkComponent,
    DesignerActivityComponent,
    DesignerPostComponent,
    DesignerJobsComponent,
    DesignerProfileComponent,
    DesignerProfileSettingsComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent,
    AdminProfileComponent,
    AdminProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
