import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { worker } from './worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private url:string=environment.url+'worker/';
  private deleteurl:string=environment.url+'deleteWorker/';

  constructor(private _http:HttpClient) { }

  getAllWorker()
  {
    return this._http.get(this.url);
  }
  getWorkerById(worker_id)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url+worker_id);
  }
  addWorker(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateWorker(item:worker)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+item.worker_id, body, { headers: head });
  }
  deleteAllWorkerByid(item:number[])
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
}
