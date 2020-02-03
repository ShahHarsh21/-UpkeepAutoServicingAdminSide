import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  private url : string=environment.url+'product/';
  constructor(private _http : HttpClient) { }

  getAllProduct()
  {
    return this._http.get(this.url);
  }
  deleteProduct(product_id: number)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + product_id ,{headers:x});
  }
  updateProduct(product_id,item)
  {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+product_id, body, { headers: head });
  }
  getProductById(product_id)
  {
    return this._http.get(this.url+product_id);
  }
  addProduct(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
}
