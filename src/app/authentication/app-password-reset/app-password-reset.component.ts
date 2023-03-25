import { Component } from '@angular/core';
import { TimeClockingUserDetails } from 'src/app/model/TimeClockingUserDetails';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-password-reset',
  templateUrl: './app-password-reset.component.html',
  styleUrls: ['./app-password-reset.component.css']
})
export class AppPasswordResetComponent {

  timeClockingUserDetails =new TimeClockingUserDetails();
  entryPanelHidden:boolean=false;
  otpPannelHidden:boolean=true;
  passwordOptionHidden:boolean=true;

  constructor(private resetPasswordService:ResetPasswordService,private spinner: NgxSpinnerService,private router:Router)
  {

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  userNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  otpFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  onSubmit():void{
    if(!this.isFormValid())
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the required fields',
      });
      return;
    }
    else if(this.emailFormControl.errors!=null ||this.userNameFormControl.errors!=null )
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please clear out the errors first',
      });
      return;
    }
    else{
      this.spinner.show();
      this.timeClockingUserDetails.errorMsg=null;
      this.resetPasswordService.checkUserExistance(this.timeClockingUserDetails).subscribe(
        (data:any) =>
        {
          this.timeClockingUserDetails=data;
          if(this.timeClockingUserDetails.errorMsg!=null)
          {
            this.spinner.hide();
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: this.timeClockingUserDetails.errorMsg
            });
          }
          else{
            this.spinner.hide();
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'OTP has been sucessfully sent. Proceed with the other steps.',
              confirmButtonText: 'OK'
            });
            this.otpPannelHidden=false;
            this.entryPanelHidden=true;
            this.passwordOptionHidden=true;
          }
        },
        (error:any) =>
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong in the backend. Contact support'
          });
        }
      )
    }
    
  }
  verifyOtp():void
  {
    this.timeClockingUserDetails.errorMsg=null;
    this.resetPasswordService.verifyOtp(this.timeClockingUserDetails).subscribe(
      (data:any)=>
      {
        this.timeClockingUserDetails=data;
          if(this.timeClockingUserDetails.errorMsg!=null)
          {
            this.spinner.hide();
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: this.timeClockingUserDetails.errorMsg
            });
          }
          else{
            this.passwordOptionHidden=false;
            this.otpPannelHidden=true;
            this.entryPanelHidden=true;
          }
      },
      (error:any) =>
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong in the backend. Contact support'
        });
      }
    )
  }

  changePassword():void{
    if(this.timeClockingUserDetails.password !=this.timeClockingUserDetails.confirmPassword)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords are not matching.'
      });
    }
    else
    {
      this.resetPasswordService.updatePassword(this.timeClockingUserDetails).subscribe(
        (data:any)=>
        {
          this.timeClockingUserDetails=data;
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Password has been sucessfully reset.',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/login']);
        },
      (error:any) =>
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong in the backend. Contact support'
        });
      }
      )
    }
  }
  isFormValid():boolean {
    return this.timeClockingUserDetails.userName && this.timeClockingUserDetails.email;
  }
}
