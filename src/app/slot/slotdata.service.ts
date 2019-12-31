import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SlotdataService {
  url:string=environment.url+'slot/';
  constructor(private _http:HttpClient) { }
  getAllSlots()
  {
    return this._http.get(this.url);
  }
}
