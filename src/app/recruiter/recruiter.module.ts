import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { RecruiterActivityComponent } from './recruiter-activity/recruiter-activity.component';
import { RecruiterNetworkComponent } from './recruiter-network/recruiter-network.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterProfileSettingsComponent } from './recruiter-profile-settings/recruiter-profile-settings.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { RecruiterPostComponent } from './recruiter-post/recruiter-post.component';

@NgModule({
  declarations: [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent,
    RecruiterPostComponent,
    RecruiterPostComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  exports : [
    RecruiterPostComponent,
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RecruiterModule { }
 
 
