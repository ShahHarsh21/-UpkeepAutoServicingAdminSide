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
  private workerAll_url:string=environment.url+'worker_All/';
  private workerImgUrl: string=environment.url+'worker_image/';
  constructor(private _http:HttpClient) { }

  getAllWorker()
  {
    return this._http.get(this.workerAll_url);
  }
  getWorkerById(worker_id)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.get(this.url+worker_id);
  }
  deleteworker(worker_id: number)
   {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + worker_id ,{headers:x});
  }
  getWorkerPhotById(worker_id)
  {
    console.log(worker_id);
    return this._http.get(this.workerImgUrl+worker_id);
  }
  updateWorkerImage(worker_id,fd)
  {
    return this._http.put(this.workerImgUrl+worker_id,fd);
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
