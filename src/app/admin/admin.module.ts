import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileSettingsComponent } from './admin-profile-settings/admin-profile-settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminProfileSettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
