import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotdataService } from '../../slotdata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { slot } from '../../slot-display/slot';

@Component({
  selector: 'app-slot-edit',
  templateUrl: './slot-edit.component.html',
  styleUrls: ['./slot-edit.component.css']
})
export class SlotEditComponent implements OnInit {
  editSlot:FormGroup;
  slot_id:number;
  constructor(private _slotdata :SlotdataService,private _router:Router,private _act_routs:ActivatedRoute) {
    this.slot_id = this._act_routs.snapshot.params['slot_register_id'];
    console.log(this.slot_id);


  }

  ngOnInit() {

    this.editSlot=new FormGroup({
      slot_register_id:new FormControl(null),
      vehicle_type: new FormControl(null),
      vehicle_model:new FormControl(null),
      service_type:new FormControl(null),
      time_period: new FormControl(null),
      pickup_date: new FormControl(null),
      pickup_address: new FormControl(null),
      requirment:new FormControl(null),
      drop_address:new FormControl(null),
      allotment_emp_id:new FormControl(null)
    });
    this._slotdata.getSlotById(this.slot_id).subscribe(
      (data:slot[])=>{
        console.log(data);
        this.formDataBind(data[0]);
     }
    );

  }
formDataBind(item:slot)
{
  console.log(item);
  this.editSlot.patchValue({
      slot_register_id:item.slot_register_id,
      vehicle_type:item.vehicle_type,
      vehicle_model:item.vehicle_model,
      service_type:item.service_type,
      time_period: item.time_period,
      pickup_date: item.pickup_date,
      pickup_address: item.pickup_address,
      requirment:item.requirment,
      drop_address:item.drop_address,
      allotment_emp_id:item.allotment_emp_id
     });
  }
  onSlotedit()
  {
    console.log(this.editSlot.value);
    this._slotdata.updateSlot(this.editSlot.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/Slot']);
      }
    );
  }
}
