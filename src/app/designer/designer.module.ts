import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerNetworkComponent } from './designer-network/designer-network.component';
import { DesignerActivityComponent } from './designer-activity/designer-activity.component';
import { DesignerPostComponent } from './designer-post/designer-post.component';
import { DesignerJobsComponent } from './designer-jobs/designer-jobs.component';
import { DesignerProfileComponent } from './designer-profile/designer-profile.component';
import { DesignerProfileSettingsComponent } from './designer-profile-settings/designer-profile-settings.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DesignerSearchProfileComponent } from './designer-search-profile/designer-search-profile.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerJobsComponent,
    DesignerProfileComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileSettingsComponent,
    DesignerSearchProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatDialogModule
  ],
  exports : [
    DesignerJobsComponent,
    DesignerProfileComponent,
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileComponent,
    DesignerProfileSettingsComponent
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class DesignerModule {
    
     

 }
