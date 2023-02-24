import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeClockingUserDetails } from 'src/app/model/TimeClockingUserDetails';
import { AuthenticationLoginService } from 'src/app/services/authentication-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  timeClockingUserDetails =new TimeClockingUserDetails();

  constructor(private authenticationLoginService:AuthenticationLoginService,private router:Router)
  {

  }

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
    else{
      this.authenticationLoginService.login(this.timeClockingUserDetails).subscribe(
        (data:any) =>
        {
          if(data.authenticationFlag==true)
          {
            sessionStorage.setItem("userName",data.userName);
            this.router.navigate(['/addentry']);
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Either Username or Passowrd or both are invalid'
            });
          }
          
        },
        (error:any)=>
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

  isFormValid():boolean {
    return this.timeClockingUserDetails.userName&& 
    this.timeClockingUserDetails.password;
  }

}
