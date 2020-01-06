import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockdataService {
  url:string=environment.url+'stock';
  constructor(public _http:HttpHeaders) { }
  getAllStock()
  {
    return this._http.get(this.url);
  }
}
