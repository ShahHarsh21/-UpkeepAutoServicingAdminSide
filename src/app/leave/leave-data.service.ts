import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {
  public url : string = environment.url + 'leave/';
  private deleteurl:string=environment.url+'deleteAllleave/';
  constructor(public _http : HttpClient) { }

  getAllLeave()
  {
    return this._http.get(this.url);
  }
  deleteleave(leave_id: number)
  {
   let x = new HttpHeaders().set(environment.header,environment.value);
   return this._http.delete(this.url + leave_id ,{headers:x});
  }
  addUser(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateUser(item:Leave)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+item.leave_id, body, { headers: head });
  }
  getLeaveById(leave_id)
  {
    return this._http.get(environment.url+'pastLeave/'+leave_id);
  }
  DeleteAllLeave(item:number[])
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
}
