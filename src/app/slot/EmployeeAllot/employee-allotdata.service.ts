import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAllotdataService {
  private url:string = environment.url+'/EmpAllotment';
  constructor(public _http:HttpClient) { }
  getAllAllotment()
  {
    return this._http.get(this.url);
  }
  AddEmpAllot(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
}
