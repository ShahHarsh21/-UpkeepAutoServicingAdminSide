import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAllotdataService {
  private url:string = environment.url+'EmpAllotment/';
  constructor(public _http:HttpClient) { }
  getAllAllotment()
  {
    return this._http.get(this.url);
  }
  AddEmpAllot(item)
  {
    console.log(item.fk_slot_id)
    console.log(item.fk_employee_id);
    const body = JSON.stringify(item);
    console.log(body);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head });
  }
  addAllotedEmpId(item)
  {
    console.log(item.fk_slot_id)
    console.log(item.fk_employee_id);
    const body = JSON.stringify(item);
    console.log(body);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url, body, { headers: head });
  }
}
