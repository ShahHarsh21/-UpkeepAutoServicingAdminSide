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
     pickup_time: string;
    pickup_address: string;
   requirment:number;
   drop_address:string;
   allotment_emp_id:number;
  constructor(public dialogref: MatDialogRef<SlotViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: slot) { }

  ngOnInit() {
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
