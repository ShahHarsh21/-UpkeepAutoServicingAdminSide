import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ColordataService {
  url:string=environment.url+'color/';

  constructor(private _http:HttpClient) { }
  getAllColor()
  {
    return this._http.get(this.url);
  }
  deleteColor(color_id)
  {
    return this._http.delete(this.url+'/'+color_id);
  }
  getColorById(color_id)
  {
    return this._http.get(this.url+'/'+color_id);
  }
  updatecolor(color_id,item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+'/'+color_id,body, { headers: head });
  }
  addColor(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url,body, { headers: head });
  }
}
