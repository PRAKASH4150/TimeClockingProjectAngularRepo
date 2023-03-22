import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application-navbar',
  templateUrl: './application-navbar.component.html',
  styleUrls: ['./application-navbar.component.css']
})
export class ApplicationNavbarComponent {

  constructor(private router:Router)
  {

  }
  onSubmit()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you wish to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("userName");
        this.router.navigate(['/signup']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //No action
      }
    })
   
  }
}
