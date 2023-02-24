import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationLoginService {

  baseUrl:any=environment.timeClockApiUrl+"/login";
  constructor(private http:HttpClient)
  {
    
  }
  login(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClcokingUserDetails);
  }
}
