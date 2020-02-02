import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  deleteSlot(slot_register_id)
  {
    return this._http.delete(this.url+slot_register_id);
  }
  getSlotById(slot_register_id)
  {
    return this._http.get(this.url+slot_register_id);
  }
  updateSlot(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.url+item.slot_register_id, body, { headers: head });
  }
  addSlots(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
}
