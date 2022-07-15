import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterActivityComponent } from './recruiter-activity/recruiter-activity.component';
import { RecruiterNetworkComponent } from './recruiter-network/recruiter-network.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterProfileSettingsComponent } from './recruiter-profile-settings/recruiter-profile-settings.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { RecruiterPost1Component } from './recruiter-post1/recruiter-post1.component';
import { RecruiterPost2Component } from './recruiter-post2/recruiter-post2.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent,
    RecruiterPost1Component,
    RecruiterPost2Component
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    RecruiterPost1Component,
    RecruiterPost2Component,
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
 
 
