import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerNetworkComponent } from './designer-network/designer-network.component';
import { DesignerActivityComponent } from './designer-activity/designer-activity.component';
import { DesignerPostComponent } from './designer-post/designer-post.component';
import { DesignerJobsComponent } from './designer-jobs/designer-jobs.component';
import { DesignerProfileComponent } from './designer-profile/designer-profile.component';
import { DesignerProfileSettingsComponent } from './designer-profile-settings/designer-profile-settings.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
import { MatIconModule } from '@angular/material/icon';

import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { UserProfileSettingsService } from 'src/app/services/user-profile-settings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerJobsComponent,
    DesignerProfileComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports : [
    DesignerJobsComponent,
    DesignerProfileComponent,
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileSettingsComponent
  ]
})
export class DesignerModule {
    
     

 }
