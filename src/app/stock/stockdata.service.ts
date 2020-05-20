import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockdataService {
  url:string=environment.url+'stock/';
  deleteurl:string=environment.url+'deletestock/';
  constructor(public _http:HttpClient) { }
  getAllStock()
  {
    return this._http.get(this.url);
  }
  getAllQuanitity()
  {
    return this._http.get(environment.url+'stockQuantity/');
  }
  getSupplier(stock_id)
  {
    return this._http.get(environment.url + 'stock_supplier/' + stock_id);
  }
  getStockById(stock_id)
   {
        return this._http.get(this.url+stock_id);
   }
   AddStock(item)
   {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.post(this.url,body,{headers :head});
   }
   deleteStock(stock_id)
   {
      let x = new HttpHeaders().set(environment.header,environment.value);
      return this._http.delete(this.url + stock_id ,{headers:x});
   }
  updateStock(stock_id,item)
   {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+item.stock_id, body, { headers: head });
   }
   deleteAllStock(item:number[])
   {
     console.log(item)
     const body = JSON.stringify(item);
     const head = new HttpHeaders().set(environment.header, environment.value);
     return this._http.post(this.deleteurl, body, { headers: head });
   }
}
