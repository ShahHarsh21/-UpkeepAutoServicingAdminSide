import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private url:string=environment.url+'user/';
  constructor(private _http:HttpClient) { }
  
  getAllUser()
  {
    return this._http.get(this.url);
  }
  getUserById(user_id)
  {
    return this._http.get(this.url,user_id);
  }
  deleteUser(user_id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + user_id ,{headers:x});
  }
  addUser(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateUser(user_id,item)
    {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+user_id, body, { headers: head });
    }
}
