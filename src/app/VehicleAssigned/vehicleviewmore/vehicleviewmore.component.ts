import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/VehicleModel';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';
import { VehicleAssignedService } from '../vehicle-assigned.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicleviewmore',
  templateUrl: './vehicleviewmore.component.html',
  styleUrls: ['./vehicleviewmore.component.css']
})
export class VehicleviewmoreComponent implements OnInit {
    public vehicle_assigned_id: number;
    public status: string;
    public service_id: number;
    public vehicle_no: string;
    public worker_id: number;
    public fk_worker_id:  number;
    public worker_name: string;
    public remark?: string;
    public worker_image : string;
    public user_name :string ;
  constructor( public _data: VehicleAssignedService,public _routs :Router,public _Act_routs : ActivatedRoute) { }

  ngOnInit(): void {
    this.vehicle_assigned_id=this._Act_routs.snapshot.params['vehicle_assigned_id']
    console.log(this.vehicle_assigned_id);
    this._data.getVehicleById(this.vehicle_assigned_id).subscribe(
      (vehicleData : any[])=>{
        console.log(vehicleData);
        this.vehicle_assigned_id = vehicleData[0].vehicle_assigned_id,
        this.status = vehicleData[0].status,
        this.service_id = vehicleData[0].service_id,
        this.vehicle_no = vehicleData[0].vehicle_no,
        this.worker_name = vehicleData[0].worker_name,
        this.remark = vehicleData[0].remark,
        this.worker_image = vehicleData[0].worker_image
        this.user_name = vehicleData[0].user_name
      }
    );
  }
  onCloseClick()
  {
    this._routs.navigate(['/nav/vehicleAssigned/']);
  }
  }


