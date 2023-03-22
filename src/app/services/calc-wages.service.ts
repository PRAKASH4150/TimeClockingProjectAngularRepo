import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalcWagesService {
  
  baseUrl:any=environment.timeClockApiUrl+"/getWages";
  reportUrl:any=environment.timeClockApiUrl+"/generatereport";
  emailUrl:any=environment.timeClockApiUrl+"/emailreport";
  constructor(private http:HttpClient)
  {
    
  }
  calcWages(timeClcokingDetails:any):Observable<any>
  {
    return this.http.post(this.baseUrl,timeClcokingDetails);
  }
  
  generateReport(timeClcokingDetails:any):Observable<any>
  {
    return this.http.post(this.reportUrl,timeClcokingDetails, { responseType: 'blob' });
  }

  emailReport(timeClcokingDetails:any):Observable<any>
  {
    return this.http.post(this.emailUrl,timeClcokingDetails);
  }
}
