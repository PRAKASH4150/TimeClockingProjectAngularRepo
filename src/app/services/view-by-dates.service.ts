import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewByDatesService {
  baseUrl:any=environment.timeClockApiUrl+"/getbydate";
  constructor(private http:HttpClient)
  {
    
  }
  getByDates(timeClcokingDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClcokingDetails);
  }
}
