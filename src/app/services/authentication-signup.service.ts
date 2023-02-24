import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSignupService {
  
  baseUrl:any=environment.timeClockApiUrl+"/signup";
  constructor(private http:HttpClient)
  {
    
  }
  signup(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.put(this.baseUrl,timeClcokingUserDetails);
  }
}
