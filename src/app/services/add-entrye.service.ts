import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddEntryeService {
  baseUrl:any=environment.timeClockApiUrl+"/insertrecord";
  constructor(private http:HttpClient)
  {
    
  }
  addEntry(timeClcokingDetails:any):Observable<any>
  {
    return this.http.put(this.baseUrl,timeClcokingDetails);
  }

}
