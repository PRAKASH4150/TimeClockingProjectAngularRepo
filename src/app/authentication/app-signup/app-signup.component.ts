import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TimeClockingUserDetails } from 'src/app/model/TimeClockingUserDetails';
import { AuthenticationSignupService } from 'src/app/services/authentication-signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent {

  timeClockingUserDetails =new TimeClockingUserDetails();

  constructor(private authenticationSignupService:AuthenticationSignupService)
  {

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  userNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
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
    else if(this.emailFormControl.errors!=null ||this.userNameFormControl.errors!=null ||this.passwordFormControl.errors!=null  )
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please clear out the errors first',
      });
      return;
    }
    else{
      this.authenticationSignupService.signup(this.timeClockingUserDetails).subscribe(
        (data:any) =>
        {
          if(data.userExistanceFlag==true)
          {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'User with user name '+this.timeClockingUserDetails.userName+" already exists. Try with different user name"
            });
          }
          else{
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your account has been Sucessfully created. Go to Login page to Continue',
              confirmButtonText: 'OK'
            });
            this.timeClockingUserDetails =new TimeClockingUserDetails();
            this.emailFormControl.reset();
            this.userNameFormControl.reset();
            this.passwordFormControl.reset();
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
    return this.timeClockingUserDetails.userName && this.timeClockingUserDetails.email && 
    this.timeClockingUserDetails.password;
  }
}
