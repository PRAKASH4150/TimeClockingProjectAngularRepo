import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    sessionStorage.removeItem("userName");
    this.router.navigate(['/signup']);
  }
}
