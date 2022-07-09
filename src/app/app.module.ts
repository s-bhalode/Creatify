import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

import { AdminModule } from './admin/admin.module';
import { DesignerModule } from './designer/designer.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { NavbarComponent } from './components/features/navbar/navbar.component';
import { LoginComponent } from './authentication/login/login.component';

import { FormControl, FormGroup, Validators } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    AdminModule,
    RecruiterModule,
    AuthenticationModule,
    DesignerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
