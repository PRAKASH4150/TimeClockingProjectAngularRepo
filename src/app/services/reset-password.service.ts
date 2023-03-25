import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  baseUrl:any=environment.timeClockApiUrl+"/checkuserexistance";
  
  baseUrl2:any=environment.timeClockApiUrl+"/verifyotp";

  baseUrl3:any=environment.timeClockApiUrl+"/updatePassword"
  
  constructor(private http:HttpClient) { }

  checkUserExistance(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClcokingUserDetails);
  }

  
  verifyOtp(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl2,timeClcokingUserDetails);
  }

  updatePassword(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl3,timeClcokingUserDetails);
  }
}
