import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
url:string=environment.url+'service/';
  constructor(public _http:HttpClient) { }
  getAllService()
  {
    return this._http.get(this.url);
  }
  getServiceById(service_id)
  {
    return this._http.get(this.url+service_id);
  }
  deleteAllService(serviceIdArr)
  {
    console.log(serviceIdArr)
    const body = JSON.stringify(serviceIdArr);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(environment.url+'deleteService',body,{headers:head});
  }
  updateService(service_id,item)
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+service_id,body,{headers:head});
  }
  addService(item)
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url,body,{headers:head});
  }
}
