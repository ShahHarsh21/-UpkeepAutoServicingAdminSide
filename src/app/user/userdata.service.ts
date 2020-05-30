import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private url:string=environment.url+'user/';
  private deleteurl:string=environment.url+'deleteAllUser/';
  constructor(private _http:HttpClient) { }

  getAllUser()
  {
    return this._http.get(this.url);
  }
  getAllUSerWithService(user_id)
  {
    return this._http.get(environment.url+'user_Service/'+user_id);
  }
  getUserById(user_id)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url+user_id);
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
  updateUser(item:user)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+item.user_id, body, { headers: head });
  }
  DeleteAllUser(item:number[])
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
}
