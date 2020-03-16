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



  getAllVehicleAssigned()
  {
    return this._http.get<VehicleAssignedModel[]>(this.url);
  }
  getVehicleById(vehicle_assigned_id)
  {
    return  this._http.get(environment.url+'vehicleAssigned/'+vehicle_assigned_id);
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
