import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecruiterModule} from './recruiter/recruiter.module';

import { LoginComponent } from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {AdminProfileComponent} from './admin/admin-profile/admin-profile.component';
import {AdminProfileSettingsComponent} from './admin/admin-profile-settings/admin-profile-settings.component';

import { DesignerDashboardComponent } from './designer/designer-dashboard/designer-dashboard.component';
import { DesignerProfileComponent } from './designer/designer-profile/designer-profile.component';
import {DesignerActivityComponent} from './designer/designer-activity/designer-activity.component';
import {DesignerJobsComponent} from './designer/designer-jobs/designer-jobs.component';
import {DesignerNetworkComponent} from './designer/designer-network/designer-network.component';
import {DesignerPostComponent} from './designer/designer-post/designer-post.component';
import {DesignerProfileSettingsComponent} from './designer/designer-profile-settings/designer-profile-settings.component';

import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import {RecruiterActivityComponent} from './recruiter/recruiter-activity/recruiter-activity.component';
import {RecruiterNetworkComponent} from './recruiter/recruiter-network/recruiter-network.component';
import {RecruiterProfileComponent} from './recruiter/recruiter-profile/recruiter-profile.component';
import {RecruiterProfileSettingsComponent} from './recruiter/recruiter-profile-settings/recruiter-profile-settings.component';
import {RecruiterPostComponent} from './recruiter/recruiter-post/recruiter-post.component';

import {AuthGuard} from './services/authguardServices/auth.guard';
import {DesignerAuthGuard} from './services/authguardServices/designer-auth.guard';
import {AdminAuthGuard} from './services/authguardServices/admin-auth.guard';
import {RecruiterAuthGuard} from './services/authguardServices/recruiter-auth.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'admin',
    canActivate : [AuthGuard],
    component : AdminDashboardComponent,
    canActivateChild : [AdminAuthGuard],
    children : [
      {
        path : 'admin-profile/:id',
        component : AdminProfileComponent
      },
      {
        path : 'admin-profile-settings/:id',
        component : AdminProfileSettingsComponent
      }
    ]
  },
  {
    path : 'designer',
    canActivate : [AuthGuard],
    canActivateChild : [DesignerAuthGuard],
    children : [
      {
        path : '',
        component : DesignerDashboardComponent
      },
      {
        path : 'designer-profile/:id',
        component : DesignerProfileComponent
      },
      {
        path : 'designer-activity',
        component : DesignerActivityComponent
      },{
        path : 'designer-jobs',
        component : DesignerJobsComponent
      },
      {
        path : 'designer-network',
        component : DesignerNetworkComponent
      },
      {
        path : 'designer-post',
        component : DesignerPostComponent
      },
      {
        path : 'designer-profile-settings/:id',
        component : DesignerProfileSettingsComponent
      }
    ]
  }, 
  {
    path : 'recruiter',
    canActivate : [AuthGuard],
    canActivateChild : [RecruiterAuthGuard],
    children : [
      {
        path : '',
        component : RecruiterDashboardComponent,
      },
      {
        path : 'recruiter-activity',
        component : RecruiterActivityComponent
      },
      {
        path : 'recruiter-network',
        component : RecruiterNetworkComponent
      },
      {
        path : 'recruiter-profile',
        component : RecruiterProfileComponent
      },
      {
        path : 'recruiter-profile-settings/:id',
        component : RecruiterProfileSettingsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RecruiterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
