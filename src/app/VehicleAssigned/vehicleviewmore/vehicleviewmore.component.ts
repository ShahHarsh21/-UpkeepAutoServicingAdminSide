import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/VehicleModel';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';
import { VehicleAssignedService } from '../vehicle-assigned.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WorkerService } from 'src/app/worker/worker.service';
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
    WorkerImage:string='';
  constructor(public _workerData : WorkerService, public _data: VehicleAssignedService,public _routs :Router,public _Act_routs : ActivatedRoute) { }

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
        this.worker_image = vehicleData[0].worker_image,
        this.user_name = vehicleData[0].user_name,
        this.worker_id = vehicleData[0].fk_worker_id,
        console.log(this.worker_image);

        // this._workerData.getImageById(this.worker_id).subscribe(
        //   (workerImage : any)=>{
        //     console.log(workerImage);
        //     this.worker_image = environment.url + '/Images/WorkerImages/' + workerImage;
        //     console.log(this.worker_image);
        //   }
        // );

      }
    );

  }
  onCloseClick()
  {
    this._routs.navigate(['/nav/vehicleAssigned/']);
  }
  }


