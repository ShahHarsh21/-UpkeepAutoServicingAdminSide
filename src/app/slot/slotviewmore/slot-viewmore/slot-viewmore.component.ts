import { Component, OnInit, Inject } from '@angular/core';
import { slot } from '../../slot-display/slot';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-slot-viewmore',
  templateUrl: './slot-viewmore.component.html',
  styleUrls: ['./slot-viewmore.component.css']
})
export class SlotViewmoreComponent implements OnInit {
 slot_register_id: number;
     vehicle_type: string;
     vehicle_model: string;
     service_type:number;
     time_period: string;
     pickup_date: string;
    pickup_address: string;
   requirment:number;
   drop_address:string;
   allotment_emp_id:number;
  constructor(public dialogref: MatDialogRef<SlotViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: slot) { }

  ngOnInit() {
    this.slot_register_id=this.data.slot_register_id;
     this.vehicle_type=this.data.vehicle_type;
     this.vehicle_model=this.data.vehicle_model;
     this.service_type=this.data.service_type;
     this.time_period=this.data.time_period;
     this.pickup_date=this.data.pickup_date;
    this.pickup_address=this.data.pickup_address;
   this.requirment=this.data.requirment;
   this.drop_address=this.data.drop_address
   this.allotment_emp_id=this.data.allotment_emp_id;

  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
