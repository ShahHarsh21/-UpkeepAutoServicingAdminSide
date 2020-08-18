import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url:string=environment.url+"dashboard/";
  public orderurl:string=environment.url+"dashboardorder/";

  constructor(public _http:HttpClient) { }

  getOrder()
  {
    return this._http.get(this.url);
  }

  getAllSimpleCustomer()
  {
    return this._http.get(this.url);
  }
  getAllorder(selectedyear)
  {
    return this._http.get(this.orderurl+selectedyear);
  }

  orderCust(order_date)
  {
    return this._http.get(environment.url+'Dashboard/'+order_date);
  }
}
