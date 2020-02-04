import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from './employee-display/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  mechanic_url:string=environment.url+"machanic";
  url:string=environment.url+'employee/';
  url2:string=environment.url+'emp_designation/';
  url3:string=environment.url+'emp_type/';
  url4:string=environment.url+'emp_With_Username/';
  constructor(private _http:HttpClient) { }
  //
  getAllEmployeeWithUserName()
  {
      return this._http.get(this.url4);
  }
  getAllType(fk_user_id)
   {
      return this._http.get(this.url3+fk_user_id);
   }
   getAllDesignation(employee_id)
   {
    return this._http.get(this.url2 + employee_id);
   }
  deleteEmployee(employee_id)
  {
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.delete(this.url+employee_id,{headers:head});
  }
  getAllEmpWithDeliverBoy()
  {
    return this._http.get(this.url+'deliveryBoy/');
  }
  getAllEmpWithMachanic()
  {
    return this._http.get(this.mechanic_url);
  }
  addEmployee(fk_user_id: number)
  {
    console.log(fk_user_id);
    let obj= {"fk_user_id": fk_user_id};
    //const body = JSON.stringify(obj);
    //console.log(body);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url,obj,{headers:head});
  }
  getEmployeeById(employee_id)
  {
    return this._http.get(this.url+employee_id);
  }
  updateemployee(employee_id,item)
    {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+employee_id,body,{headers:head});
    }
}
