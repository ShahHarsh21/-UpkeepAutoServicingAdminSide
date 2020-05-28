import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url:string=environment.url+"dashboard/";

  constructor(public _http:HttpClient) { }

  getOrder()
  {
    return this._http.get(this.url);
  }

  getAllSimpleCustomer()
  {
    return this._http.get(this.url);
  }
}
