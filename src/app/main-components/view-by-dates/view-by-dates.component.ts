import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TimeClockingDetails } from 'src/app/model/TimeClcokingDetails';
import { ViewByDatesService } from 'src/app/services/view-by-dates.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-by-dates',
  templateUrl: './view-by-dates.component.html',
  styleUrls: ['./view-by-dates.component.css']
})
export class ViewByDatesComponent implements OnInit{

  timeClockingDetails=new TimeClockingDetails();
  hideTable:boolean=true;
  timeClockingDetailsList:any;
  rows:any=3;
  first=0;

  constructor(private viewByDateService:ViewByDatesService)
  {

  }
  startDateRequiredFormControl = new FormControl('', [
    Validators.required,
  ]);

  endDateRequiredFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  ngOnInit(): void {
    this.timeClockingDetails=new TimeClockingDetails();
    this.hideTable=true;
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
      this.viewByDateService.getByDates(this.timeClockingDetails).subscribe(
        (data:any) =>
        {
          this.timeClockingDetailsList=data;
          this.hideTable=false;
        },
        (error:any) =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error,
          });
        }
      )
    }
  }
  

  isFormValid() {
    return this.timeClockingDetails.startDate && this.timeClockingDetails.endDate;
  }
}
