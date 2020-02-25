import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/VehicleModel';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';
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
  constructor(public dialogref: MatDialogRef<VehicleviewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: VehicleAssignedModel) { }

  ngOnInit(): void {
    console.log(this.data );
    this.vehicle_assigned_id=this.data.vehicle_assigned_id;
    this.status=this.data.status;
    this.service_id=this.data.service_id;
    this.vehicle_no=this.data.vehicle_no;
    this.worker_id=this.data.worker_id;
    this.fk_worker_id=this.data.fk_worker_id;
    this.worker_name=this.data.worker_name;
    this.remark=this.data.remark;
    this.worker_image =this.data.worker_image;
  }
  onCloseClick()
  {
    this.dialogref.close();
  }
  }

