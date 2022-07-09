import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecruiterModule} from './recruiter/recruiter.module';
import {RecruiterPost1Component} from './recruiter/recruiter-post1/recruiter-post1.component';
import {RecruiterPost2Component} from './recruiter/recruiter-post2/recruiter-post2.component';

const routes: Routes = [
  {
    path : 'recruiter-post1',
    component : RecruiterPost1Component
  },
  {
    path : 'recruiter-post2',
    component : RecruiterPost2Component
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
