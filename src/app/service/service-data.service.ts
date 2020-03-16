import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private url:string=environment.url+'service/';
  private userService_url : string = environment.url + 'userService/' ;
  private deleteurl:string=environment.url+'deleteAllService/';
  constructor(public _http:HttpClient) { }
  getAllService()
  {
    return this._http.get(this.url);
  }
  getAllServiceWithAll()
  {
    return this._http.get(environment.url+'AllService/');
  }
  getServiceById(service_id)
  {
    return this._http.get(this.url+service_id);
  }
  updateService(service_id,item)
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+service_id,body,{headers:head});
  }
  getUserServiceByUserId(service_id)
  {
    return this._http.get(environment.url+'user_Service/'+service_id);
  }
  addService(item)
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url,body,{headers:head});
  }
  DeleteAllService(item:number[])
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
  deleteService(service_id: number)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + service_id ,{headers:x});
  }

}
