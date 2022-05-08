import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerNetworkComponent } from './designer-network/designer-network.component';
import { DesignerActivityComponent } from './designer-activity/designer-activity.component';
import { DesignerPostComponent } from './designer-post/designer-post.component';
import { DesignerJobsComponent } from './designer-jobs/designer-jobs.component';
import { DesignerProfileComponent } from './designer-profile/designer-profile.component';
import { DesignerProfileSettingsComponent } from './designer-profile-settings/designer-profile-settings.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';


@NgModule({
  declarations: [
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerJobsComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileComponent,
    DesignerProfileSettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DesignerJobsComponent,
    DesignerActivityComponent,
    DesignerDashboardComponent,
    DesignerNetworkComponent,
    DesignerPostComponent,
    DesignerProfileComponent
  ]
})
export class DesignerModule { }
