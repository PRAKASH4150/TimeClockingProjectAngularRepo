import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationNavbarComponent } from './shared/header/application-navbar/application-navbar.component';
import { ApplicationFooterComponent } from './shared/footer/application-footer/application-footer.component';
import { AddTimesheetEntryComponent } from './main-components/add-timesheet-entry/add-timesheet-entry.component';
import { DatePipe } from '@angular/common';
import { AppSignupComponent } from './authentication/app-signup/app-signup.component';
import { AuthenticationNavbarComponent } from './shared/header/authentication-navbar/authentication-navbar.component';
import { AppLoginComponent } from './authentication/app-login/app-login.component';
import { ViewAllEntriesComponent } from './main-components/view-all-entries/view-all-entries.component';
import { ViewByDatesComponent } from './main-components/view-by-dates/view-by-dates.component';
import { CalculateWagesComponent } from './main-components/calculate-wages/calculate-wages.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppPasswordResetComponent } from './authentication/app-password-reset/app-password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationNavbarComponent,
    ApplicationFooterComponent,
    AddTimesheetEntryComponent,
    AppSignupComponent,
    AuthenticationNavbarComponent,
    AppLoginComponent,
    ViewAllEntriesComponent,
    ViewByDatesComponent,
    CalculateWagesComponent,
    AppPasswordResetComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
