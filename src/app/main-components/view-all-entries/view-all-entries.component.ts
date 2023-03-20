import { Component, OnInit } from '@angular/core';
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
  rows:any=5;
  first=0;

  constructor(private viewAllEntriesService:ViewAllEntriesService)
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
}
