import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { TimeClockingDetails } from 'src/app/model/TimeClcokingDetails';
import { CalcWagesService } from 'src/app/services/calc-wages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculate-wages',
  templateUrl: './calculate-wages.component.html',
  styleUrls: ['./calculate-wages.component.css']
})
export class CalculateWagesComponent {

  timeClockingDetails=new TimeClockingDetails();
  hideTable:boolean=true;
  timeClockingDetailsList:any;
  rows:any=3;
  first=0;


  constructor(private calcWagesService:CalcWagesService,private spinner: NgxSpinnerService)
  {

  }
  startDateRequiredFormControl = new FormControl('', [
    Validators.required,
  ]);

  endDateRequiredFormControl = new FormControl('', [
    Validators.required,
  ]);

  wageRequiredFormControl = new FormControl('', [
    Validators.required,
  ]);

  onSubmit()
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
      this.calcWagesService.calcWages(this.timeClockingDetails).subscribe(
        (data:any) =>
        {
          this.timeClockingDetailsList=data;
          this.hideTable=false;
        },
        (error:any)=>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error
          });
        }
      )
    }
  }

  generateReport()
  {
    console.log(this.timeClockingDetails);
    this.calcWagesService.generateReport(this.timeClockingDetails).subscribe(
      (data:any)=>
      {
        const blob = new Blob([data], { type: 'application/pdf' });
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Report has been successfully generated!!',
          confirmButtonText: 'OK'
        });
      },
      (error:any)=>
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error in Generating the report"
        });
      }
    )
  }

  emailReport()
  {
    this.spinner.show();
    this.calcWagesService.emailReport(this.timeClockingDetails).subscribe(
      (data:any)=>
      {
        this.spinner.hide();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Report has been mailed successfully!!',
          confirmButtonText: 'OK'
        });
      },
      (error:any)=>
      {
        this.spinner.hide();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error in mailing the report"
        });
      }
    )
  }

  isFormValid() {
    return this.timeClockingDetails.startDate && this.timeClockingDetails.endDate && this.timeClockingDetails.wagePerHour;
  }
}