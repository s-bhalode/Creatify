import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DesignerDashboardComponent } from './designer/designer-dashboard/designer-dashboard.component';
import { DesignerProfileComponent } from './designer/designer-profile/designer-profile.component';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : LoginComponent},
  {path : 'designer-profile', component : DesignerProfileComponent},
  {path : 'designer', component : DesignerDashboardComponent},
  {path : 'recruiter', component : RecruiterDashboardComponent},
  {path : 'admin', component : AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
