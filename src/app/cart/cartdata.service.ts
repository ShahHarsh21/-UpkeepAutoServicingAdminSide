import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
private url:string = environment.url+'cart/';
  constructor(private _http:HttpClient) { }

  getAllCart()
  {
    return this._http.get(this.url);
  }
  getCartById()
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url);
  }
  deleteCart(cart_id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + cart_id ,{headers:x});
  }
  addCart(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateCart(item:cart)
    {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+item.cart_id, body, { headers: head });
    }
}



