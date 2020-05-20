import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {
  public url : string = environment.url + 'leave/';
  constructor(public _http : HttpClient) { }

  getAllLeave()
  {
    return this._http.get(this.url);
  }

  getLeaveById(leave_id)
  {
    return this._http.get(environment.url+'pastLeave/'+leave_id);
  }
}
