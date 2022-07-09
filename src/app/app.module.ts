import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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




//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import '@popperjs/core';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
