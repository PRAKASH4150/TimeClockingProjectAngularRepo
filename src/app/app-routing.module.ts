import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './authentication/app-login/app-login.component';
import { AppPasswordResetComponent } from './authentication/app-password-reset/app-password-reset.component';
import { AppSignupComponent } from './authentication/app-signup/app-signup.component';
import { AddTimesheetEntryComponent } from './main-components/add-timesheet-entry/add-timesheet-entry.component';
import { CalculateWagesComponent } from './main-components/calculate-wages/calculate-wages.component';
import { ViewAllEntriesComponent } from './main-components/view-all-entries/view-all-entries.component';
import { ViewByDatesComponent } from './main-components/view-by-dates/view-by-dates.component';

const routes: Routes = [
  { path: 'signup', component: AppSignupComponent}, 
  { path:'login',component:AppLoginComponent},
  { path:'reset-password',component:AppPasswordResetComponent},
  { path: 'addentry', component:AddTimesheetEntryComponent},
  { path:'viewallrecs',component:ViewAllEntriesComponent},
  { path:'viewbydates',component:ViewByDatesComponent},
  { path:'calcwages',component:CalculateWagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
