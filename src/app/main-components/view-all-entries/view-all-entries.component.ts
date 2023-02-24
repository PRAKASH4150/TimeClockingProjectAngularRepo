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
  rows:any=10;
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
      },
      (error:any)=>
      {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong in fetching the data. Contact support',
        });
      }
    )

  }
}
