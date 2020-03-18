import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { format } from 'url';
import { ServiceDataService } from '../../service-data.service';
import { Router } from '@angular/router';
import { Service_class } from '../../service_class';
import { concat } from 'rxjs';
import { userSerivce_class } from 'src/app/class/userService_class';
import { UserdataService } from 'src/app/user/userdata.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {
  serviceArr:any[]=[
    { 'Name': 'Air-Condtioning', 'isChecked': false },
    { 'Name': 'Break Repairs', 'isChecked': false },
    { 'Name': 'Heating & Cooling', 'isChecked': false },
    { 'Name': 'Oil & Lube', 'isChecked': false },
    { 'Name': 'Steering & Suspension', 'isChecked': false },
    { 'Name': 'Transmission Repair', 'isChecked': false },
    { 'Name': 'Battery Service', 'isChecked': false },
    { 'Name': 'Exhaust System', 'isChecked': false },
    { 'Name': 'Emissions', 'isChecked': false },
    { 'Name': 'Pvt Maintenance', 'isChecked': false },
    { 'Name': 'Tire Pressure', 'isChecked': false },
    { 'Name': 'Other', 'isChecked': false }
  ];
  checkServiceArr : string[]=[];
  addService : FormGroup;
  constructor(public _Data:ServiceDataService,public _routs:Router, public _userData:UserdataService) { }

  ngOnInit() {
    this.addService=new FormGroup({
      service_id : new FormControl(null),
      fk_user_id : new FormControl(null),
      vehicle_no : new FormControl(null,Validators.required),
      meter_reading : new FormControl(null,Validators.required),
      fuel_tank : new FormControl('Full Tank'),
      remark : new FormControl(null),
      complaints : new FormControl(null),
    });

    this._userData.getAllUser().subscribe(
      (data: userSerivce_class[]) => {

      }
    );

  }

  onCancle()
  {
    this._routs.navigate(['/nav/serviceAdd']);
  }
  onServiceAdd()
  {
    console.log(this.addService.value);
    this.addService.value.complaints = this.checkServiceArr.toString();
    this.addService.value.fk_user_id = 1;
    this._Data.addService(this.addService.value).subscribe(
      (data:any)=>{
        this._routs.navigate(['/nav/service']);
      }
    );
  }
  onServiceCheck(item)
  {
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
  }
}
