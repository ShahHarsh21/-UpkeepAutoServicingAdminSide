import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierdataService {
  url:string=environment.url+'supplier';
  constructor(private _http:HttpClient) { }
  getAllSupplier()
  {
    return this._http.get(this.url);
  }
}
