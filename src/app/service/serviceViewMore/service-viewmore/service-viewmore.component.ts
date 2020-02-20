import { Component, OnInit, Inject } from '@angular/core';
import { ServiceDataService } from '../../service-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Service_class } from '../../service_class';

@Component({
  selector: 'app-service-viewmore',
  templateUrl: './service-viewmore.component.html',
  styleUrls: ['./service-viewmore.component.css']
})
export class ServiceViewmoreComponent implements OnInit {
    public service_id :number;
    public fk_user_id:number;
    public vehicle_no:string;
    public meter_Reading :string;
    public fuel_tank:string;
    public remark :string;
    public complaints:string;
  constructor(private _servicedata:ServiceDataService,public dialogref: MatDialogRef<ServiceViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: Service_class) { }

  ngOnInit() {
    this.service_id = this.data.service_id,
    this.fk_user_id = this.data.fk_user_id,
    this.vehicle_no = this.data.vehicle_no,
    this.meter_Reading = this.data.meter_reading,
    this.fuel_tank = this.data.fuel_tank,
    this.remark = this.data.remark,
    this.complaints = this.data.complaints;
  }

}
