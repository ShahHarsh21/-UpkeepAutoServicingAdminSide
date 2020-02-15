import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from './employee-display/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  url:string=environment.url;
  mechanic_url:string=environment.url+"machanic";
  Emp_url:string=environment.url+'employee/';
  EmpImg_user: string = environment.url + 'EmpImg/';
  EmpDesignation_url:string=environment.url+'emp_designation/';
  Type_url:string=environment.url+'emp_type/';
  Username_url:string=environment.url+'emp_With_Username/';
  private deleteurl:string =environment.url+'deleteAllEmp/'


  constructor(private _http:HttpClient) { }
  //
  getAllEmployeeWithUserName()
  {
      return this._http.get(this.Username_url);
  }
  getAllType(fk_user_id)
  {
     return this._http.get(this.Emp_url+fk_user_id);
  }
  getAllDesignation(employee_id)
  {
   return this._http.get(this.EmpDesignation_url + employee_id);
  }
  deleteEmployee(employee_id)
  {
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.delete(this.Emp_url+employee_id,{headers:head});
  }
  getAllEmpWithDeliverBoy()
  {
    console.log("from data service")
    console.log(this.url)
    return this._http.get(this.url+'deliveryBoy/');
  }
  getAllEmpWithMachanic()
  {
    return this._http.get(this.mechanic_url);
  }
  getAllPhoto(employee_id)
  {
        return this._http.get(this.Emp_url+employee_id);
  }
  addEmployee(fk_user_id: number)
  {
    console.log(fk_user_id);
    let obj= {"fk_user_id": fk_user_id};
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.Emp_url,obj,{headers:head});
  }
  getEmployeeById(employee_id)
  {
    return this._http.get(this.Emp_url+employee_id);
  }
  updateemployee(employee_id,item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.Emp_url+employee_id,body,{headers:head});
  }
  updatePhoto (employee_id,fd)
  {
    return this._http.put(this.EmpImg_user + employee_id, fd);
  }
  deleteAllEmp(item:number[])
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
}
