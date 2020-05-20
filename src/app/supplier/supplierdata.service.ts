import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierdataService {
  url:string=environment.url+'supplier/';
  delurl : string = environment.url+'supplier/';

  constructor(private _http:HttpClient) { }
  getAllSupplier()
  {
    return this._http.get(this.url);
  }
  getSupplierById(supplier_id)
  {
    return this._http.get(this.url+supplier_id);
  }
  getSupplierByIdWithAllDetails(supplier_id)
  {
    return this._http.get(environment.url + 'supplier_product/' +supplier_id);
  }
  DeleteAllSupplier(item:number[])
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.delurl, body, { headers: head });
  }
  deleteSupplier(supplier_id: number)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + supplier_id ,{headers:x});
  }
  AddSupplier(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    console.log(body);
    return this._http.post(this.url,body,{headers  : head});
  }
  updateSupplier(supplier_id,item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(environment.url+'supplier/'+supplier_id,body,{headers : head});
  }
}
