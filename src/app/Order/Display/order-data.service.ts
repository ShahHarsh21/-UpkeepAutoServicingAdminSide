import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  url : string = environment.url + 'UserOrder/';
  constructor(private _http : HttpClient) { }

  getAllOrder()
  {
    return this._http.get(this.url);
  }
}
