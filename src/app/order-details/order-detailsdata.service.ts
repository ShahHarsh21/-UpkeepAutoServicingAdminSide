import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { order_details } from '../order-details/order_details';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsdataService {
  private url:string= environment.url+'order_details/';
  constructor(public _http:HttpClient) { }

  getAllOrder_Details()
  {
    return this._http.get(this.url);
  }
  getAllOrder_DetailsById()
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url);
  }
  deleteOrder_Details(order_details_id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + order_details_id ,{headers:x});
  }
  addOrder_Details(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateOrder_Details(item:order_details)
    {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+item.order_details_id, body, { headers: head });
    }
}


