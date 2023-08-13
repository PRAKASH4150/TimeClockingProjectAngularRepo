import { DatePipe } from '@angular/common';
import { Component, HostListener, NgModule, SkipSelf } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppAuthenticationServiceComponent } from 'src/app/authentication/app-authentication-service/app-authentication-service.component';
import { TimeClockingDetails } from 'src/app/model/TimeClcokingDetails';
import { AddEntryeService } from 'src/app/services/add-entrye.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-timesheet-entry',
  templateUrl: './add-timesheet-entry.component.html',
  styleUrls: ['./add-timesheet-entry.component.css'],
  providers: [AppAuthenticationServiceComponent]
})
export class AddTimesheetEntryComponent {

  timeClockingDetails=new TimeClockingDetails();

  options: { label: string, value: any }[] = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
  ];


 constructor(private addEntryService:AddEntryeService,private datePipe: DatePipe)
 {

 }

 dateRequiredFormControl = new FormControl('', [
  Validators.required,
]);

checkInTimeFormControl = new FormControl('', [
  Validators.required,
]);

checkOutTimeFormControl = new FormControl('', [
  Validators.required,
]);

paymentStatusFormControl = new FormControl('', [
  Validators.required,
]);

locationFormControl = new FormControl('', [
  Validators.required,
]);


  onSubmit():void
  {
    if (!this.isFormValid()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the required fields',
      });
      return;
    }
    else
    {
      this.timeClockingDetails.userName=sessionStorage.getItem("userName");

      const checkInDate = new Date();
      const checkInTime = this.timeClockingDetails.checkIn.split(':');
      checkInDate.setHours(+checkInTime[0]);
      checkInDate.setMinutes(+checkInTime[1]);

      const checkOutDate = new Date();
      const checkOutTime = this.timeClockingDetails.checkOut.split(':');
      checkOutDate.setHours(+checkOutTime[0]);
      checkOutDate.setMinutes(+checkOutTime[1]);
      this.timeClockingDetails.checkIn = this.datePipe.transform(checkInDate, 'HH:mm:ss');
      this.timeClockingDetails.checkOut=this.datePipe.transform(checkOutDate, 'HH:mm:ss');
      console.log(this.timeClockingDetails.paymentStatus);
      this.addEntryService.addEntry(this.timeClockingDetails).subscribe(
        (data:any) =>
        {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'The number of Hours you worked today is '+data.totalHoursWorked,
            confirmButtonText: 'OK'
          });
        this.timeClockingDetails=new TimeClockingDetails();
        },
        (error:any) =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong in the backend. Contact support',
          });
        }
      )
    }
  }

  isFormValid() {
    return this.timeClockingDetails.dateWorked && 
    this.timeClockingDetails.checkIn && this.timeClockingDetails.checkOut && this.timeClockingDetails.paymentStatus&&this.timeClockingDetails.location;
  }

 
}
