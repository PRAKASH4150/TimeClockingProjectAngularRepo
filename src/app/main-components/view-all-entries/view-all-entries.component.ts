import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TimeClockingDetails } from 'src/app/model/TimeClcokingDetails';
import { ViewAllEntriesService } from 'src/app/services/view-all-entries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-entries',
  templateUrl: './view-all-entries.component.html',
  styleUrls: ['./view-all-entries.component.css']
})
export class ViewAllEntriesComponent implements OnInit{

  timeClockingDetails=new TimeClockingDetails();
  timeClockingDetailsList:any;
  listEmptyMessage="No records found.";
  listEmptyFlag:boolean=true;
  updateHiddenFlag=true;
  rows:any=3;
  first=0;

  options: { label: string, value: any }[] = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Unpaid', value: 'Unpaid' },
  ];


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
  
  constructor(private viewAllEntriesService:ViewAllEntriesService,private datePipe: DatePipe)
  {

  }
  ngOnInit(): void {
    this.timeClockingDetails.userName=sessionStorage.getItem("userName");
    this.viewAllEntriesService.getRecordsByUserName(this.timeClockingDetails).subscribe(
      (data:any)=>
      {
        this.timeClockingDetailsList=data;
        this.listEmptyFlag=false;
      },
      (error:any)=>
      {
        this.listEmptyFlag=true;
      }
    )

  }

  removeSpecificRecord(timeClockingDetailsObject:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
    }).then((result) => {
      if (result.isConfirmed) {
        this.viewAllEntriesService.removeSpecificRecord(timeClockingDetailsObject).subscribe(
          (data:any) =>
          {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Record has been deleted successfully',
              confirmButtonText: 'OK'
            });
            this.ngOnInit();
          },
          (error:any) =>
          {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong in deleting the data. Contact support',
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //No action
      }
    })
  }

  updateEntry(tcd:any):void
  {
    this.updateHiddenFlag=false;    
    this.timeClockingDetails=tcd;
  }

  cancelUpdate()
  {
    this.updateHiddenFlag=true;
  }
  onSubmit():void{
    
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

    this.viewAllEntriesService.updateSpecificRecord(this.timeClockingDetails).subscribe(
      (data:any) =>
      {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Record has been updated successfully',
          confirmButtonText: 'OK'
        });
        this.updateHiddenFlag=true;
        this.ngOnInit();
      },
      (error:any)=>
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong in updating the data. Contact support',
        });
      }
    )
  }
}
