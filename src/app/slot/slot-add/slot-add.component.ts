import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SlotdataService } from '../slotdata.service';
import { employee } from 'src/app/employee/employee-display/employee';
import { EmployeedataService } from 'src/app/employee/employeedata.service';

@Component({
  selector: 'app-slot-add',
  templateUrl: './slot-add.component.html',
  styleUrls: ['./slot-add.component.css']
})
export class SlotAddComponent implements OnInit {
  addslot:FormGroup;
  all_id:number[]=[];
  constructor(private _routs:Router,private _emp_data:EmployeedataService,private _data:SlotdataService) { }

  ngOnInit() {
    this.addslot=new FormGroup({
      slot_register_id:new FormControl(null),
      vehicle_type:new FormControl(null),
      vehicle_model: new FormControl(null),
      service_type:new FormControl(null),
      time_period: new FormControl(null),
      pickup_time: new FormControl(null),
      pickup_address: new FormControl(null),
      requirment:new FormControl(null),
      drop_address:new FormControl(null),
      allotment_emp_id:new FormControl(null)
    });
    // this._emp_data.getAllEmployee().subscribe(
    //   (data:any)=>{
    //     let data1=data
    //     this.all_id.push();
    //   }
    // );
  }
  onSlotAdd()
  {
    console.log(this.addslot.value);
    let slotObj={
      vehicle_type:this.addslot.value.vehicle_type,
      vehicle_model:this.addslot.value.vehicle_model,
      service_type:this.addslot.value.service_type,
      time_period:this.addslot.value.time_period,
      pickup_time:this.addslot.value.pickup_time,
      pickup_address:this.addslot.value.pickup_address,
      requirment:this.addslot.value.requirment,
      drop_address:this.addslot.value.drop_address
    };
    console.log(slotObj);
    this._data.addSlots(slotObj).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['/nav/Slots']);
      }
    );
  }
}
