import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterActivityComponent } from './recruiter-activity/recruiter-activity.component';
import { RecruiterPostComponent } from './recruiter-post/recruiter-post.component';
import { RecruiterNetworkComponent } from './recruiter-network/recruiter-network.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterProfileSettingsComponent } from './recruiter-profile-settings/recruiter-profile-settings.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';


@NgModule({
  declarations: [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterPostComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterPostComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent
  ]
})
export class RecruiterModule { }
