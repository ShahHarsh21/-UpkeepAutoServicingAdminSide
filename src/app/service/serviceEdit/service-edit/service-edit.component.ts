import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDataService } from '../../service-data.service';
import { Service_class } from '../../service_class';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  editService :  FormGroup;
  service_routs_id:number;
  serviceArr:string[]=[
    "Air-Condtioning",
    "Break Repairs",
    "Engine Diagnostic",
    'Heating & Cooling',
    "Oil,Lube",
    "Steering & Suspension",
    "Transmission Repair",
    "Battery Service",
    "Exhaust System",
    "Emissions",
    "Pvt Maintenance",
    "Tire Pressure",
    "Tire Service",
    "Other"
  ];
  checkServiceArr : string[];

  constructor(public _route:Router,public _Act_routs:ActivatedRoute,public _Data:ServiceDataService) { }
  ngOnInit() {
    this.service_routs_id=this._Act_routs.snapshot.params['service_id'];
    console.log(this.service_routs_id);
    this.editService=new FormGroup({
      service_id :new FormControl(null),
      fk_user_id:new FormControl(null),
      vehicle_no:new FormControl(null),
      meter_reading :new FormControl(null),
      fuel_tank:new FormControl(null),
      remark :new FormControl(null),
      complaints:new FormControl(null)
    });
    this._Data.getServiceById(this.service_routs_id).subscribe(
      (service_Data:any)=>{
        console.log(service_Data);
        this.formDataBind(service_Data[0]);
      }
    );
  }
  formDataBind(item:Service_class)
    {
      console.log(item);
      this.editService.patchValue({
        serice_id : item.service_id,
        fk_user_id : item.fk_user_id,
        vehicle_no:item.vehicle_no,
        meter_reading : item.meter_reading,
        fuel_tank:item.fuel_tank,
        remark : item.remark,
        complaints : item.complaints
        });
    }
  onCancle()
  {
  }
  onServiceEdit()
  {
    console.log(this.editService.value);
    this._Data.updateService(this.service_routs_id,this.editService.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/nav/service']);
      }
    );
  }
  onServiceCheck(item)
  {
    console.log(item);
    if(this.checkServiceArr.find(x => x == item))
    {
        this.checkServiceArr.splice(this.checkServiceArr.indexOf(item),1);
    }
    else
    {
      this.checkServiceArr.push(item);
    }
    console.log(this.checkServiceArr);
  }
}
