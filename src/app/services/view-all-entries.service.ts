import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAllEntriesService {

  baseUrl:any=environment.timeClockApiUrl+"/getbyusername";
  constructor(private http:HttpClient)
  {
    
  }
  getRecordsByUserName(timeClcokingUserDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClcokingUserDetails);
  }
}
