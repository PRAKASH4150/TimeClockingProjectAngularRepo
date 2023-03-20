import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAllEntriesService {

  baseUrl:any=environment.timeClockApiUrl+"/getbyusername";
  baseUrl2:any=environment.timeClockApiUrl+"/deletebyid";
  constructor(private http:HttpClient)
  {
    
  }
  getRecordsByUserName(timeClockingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClockingUserDetails);
  }

  removeSpecificRecord(timeClockingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl2,timeClockingUserDetails);
  }
}
