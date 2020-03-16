import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WorkerModel } from '../WorkerModel';
import { VehicleModel } from '../VehicleModel';
import { VehicleAssignedModel } from '../VehicleAssignedModel';

@Injectable({
  providedIn: 'root'
})
export class VehicleAssignedService {

  constructor(private _http:HttpClient) { }

  url: string = environment.url + 'Vehicle_assigned/';
  urlNotAssi_Vehicles: string = environment.url + 'Vehicle_not_assigned/';
  urlWorker: string = environment.url + 'worker/';
  urlVehicle: string = environment.url + 'service/';
  private deleteurl: string=environment.url+'deleteAllvehicle_Assigned/';

  getAllVehicleAssigned()
  {
    return this._http.get<VehicleAssignedModel[]>(this.url);
  }
  deleteVehicle_assigned(Vehicle_assigned_id:number)
  {
   let x = new HttpHeaders().set(environment.header,environment.value);
   return this._http.delete(this.url + Vehicle_assigned_id,{headers:x});
  }
  DeleteAllVehicle_assigned(item:number[])
    {
      console.log(item)
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.post(this.deleteurl, body, { headers: head });
    }

  addVehicleAssigned(item)
  {
    //const body = JSON.stringify(item);
    //const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, item);
  }

  getAllWorkers()
  {
    return this._http.get<WorkerModel[]>(this.urlWorker);
  }

  getWorkerVehiclesCount()
  {
    return this._http.get<VehicleAssignedModel[]>(this.url);
  }

  getNotAssignedVehicles()
  {
    return this._http.get<VehicleModel[]>(this.urlNotAssi_Vehicles);
  }

  getAllAssignedByVehicleID(VehicleID: number)
  {
    return this._http.get<VehicleAssignedModel[]>(this.url + VehicleID);
  }
}
