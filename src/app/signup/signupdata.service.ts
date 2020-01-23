import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupdataService {
  private url:string= environment.url+"signup/";
  constructor(private _http:HttpClient) { }

  signup(obj)
  {
    console.log(obj);
    const body =JSON.stringify(obj);
    const head=new HttpHeaders().set(environment.header,environment.value);
    return this._http.post(this.url,body,{headers:head});
  }
}
