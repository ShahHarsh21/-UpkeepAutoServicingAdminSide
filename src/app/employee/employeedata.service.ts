import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  url:string=environment.url+'Employee/';
  constructor(private _http:HttpClient) { }
  getAllEmployee()
  {
    return this._http.get(this.url);
  }
  deleteEmployee(employee_id)
  {
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.delete(this.url+employee_id,{headers:head});
  }
  addEmployee(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url,body,{headers:head});
  }
  getEmployeeById(employee_id)
  {
    return this._http.get(this.url,employee_id);
  }
  updateemployee(employee_id,item)
    {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+employee_id,body,{headers:head});
    }
}
