import { Component } from '@angular/core';
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
  rows:any=5;
  first=0;


  constructor(private calcWagesService:CalcWagesService)
  {

  }

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
        console.log(error.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Error in Generating the report"
        });
      }
    )
  }

  isFormValid() {
    return this.timeClockingDetails.startDate && this.timeClockingDetails.endDate && this.timeClockingDetails.wagePerHour;
  }
}