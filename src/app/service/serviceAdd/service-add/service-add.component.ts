import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { format } from 'url';
import { ServiceDataService } from '../../service-data.service';
import { Router } from '@angular/router';
import { Service_class } from '../../service_class';
import { concat } from 'rxjs';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {
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
  checkServiceArr : string[]=[];
  addService : FormGroup;
  constructor(public _Data:ServiceDataService,public _routs:Router) {
    this.addService=new FormGroup({
      service_id : new FormControl(null),
      fk_user_id : new FormControl(null),
      vehicle_no : new FormControl(null),
      meter_reading : new FormControl(null),
      fuel_tank : new FormControl(null),
      reamark : new FormControl(null),
      complaints : new FormControl(null),
    });
  }

  ngOnInit() {
  }
  onCancle()
  {
    this._routs.navigate(['/nav/serviceAdd']);
  }
  onServiceAdd()
  {
    console.log(this.addService.value);
    this.addService.value.complaints=this.checkServiceArr;
    this._Data.addService(this.addService.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['/nav/service']);
      }
    );
  }
  onServiceCheck(item)
  {
    console.log(item);
    // console.log(this.checkServiceArr.find(item));
    // console.log(this.checkServiceArr.push(item));
    if(this,this.checkServiceArr.find(x => x == item))
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
