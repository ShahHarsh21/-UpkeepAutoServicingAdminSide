import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SlotdataService } from '../slotdata.service';

@Component({
  selector: 'app-slot-add',
  templateUrl: './slot-add.component.html',
  styleUrls: ['./slot-add.component.css']
})
export class SlotAddComponent implements OnInit {
  addslot:FormGroup;
  constructor(private _routs:Router,private _data:SlotdataService) { }

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
  }
  onSlotAdd()
  {

  }
}
