import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

import { AdminModule } from './admin/admin.module';
import { DesignerModule } from './designer/designer.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { NavbarComponent } from './components/features/navbar/navbar.component';
import { LoginComponent } from './authentication/login/login.component';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import '@popperjs/core';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './services/auth.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { DesignerAuthGuard } from './services/designer-auth.guard';
import { RecruiterAuthGuard } from './services/recruiter-auth.guard';
import { RecruiterPost1Component } from './recruiter/recruiter-post1/recruiter-post1.component';
import { RecruiterPost2Component } from './recruiter/recruiter-post2/recruiter-post2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    AdminModule,
    RecruiterModule,
    AuthenticationModule,
    //NgbModule,
    MatOptionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DesignerModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthGuard, AdminAuthGuard, DesignerAuthGuard, RecruiterAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
