import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app-authentication-service',
  templateUrl: './app-authentication-service.component.html',
  styleUrls: ['./app-authentication-service.component.css']
})
export class AppAuthenticationServiceComponent {
 
  private lastActivityTime: number = Date.now();

  constructor(private router:Router) {
    timer(0, 60000).pipe(
      tap(() => this.checkInactivity())
    ).subscribe();
  }

  checkInactivity() {
    const now = Date.now();
    const timeSinceLastActivity = now - this.lastActivityTime;
    if (timeSinceLastActivity > 120000) {
      sessionStorage.removeItem("userName");
      this.router.navigate(['/signup']);
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: 'You have been logged out due to inactivity.',
        customClass: {
          confirmButton: 'btn btn-primary'
        }
      });
    }
  }

  updateLastActivityTime() {
    this.lastActivityTime = Date.now();
  }
}
