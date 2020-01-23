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
  slot_edit:FormGroup;
  constructor(private _slotdata :SlotdataService,private _router:Router,private _act_routs:ActivatedRoute) {
    var slot_id :number= this._act_routs.snapshot.params['slot_regester_id'];

    this.slot_edit=new FormGroup({
      slot_register_id:new FormControl(null),
      vehicle_type: new FormControl(null),
      vehicle_model:new FormControl(null),
      service_type:new FormControl(null),
      time_period: new FormControl(null),
      pickup_time: new FormControl(null),
      pickup_address: new FormControl(null),
      requirment:new FormControl(null),
      drop_address:new FormControl(null),
      allotment_emp_id:new FormControl(null)
    });
  }

  ngOnInit() {
    this._slotdata.getAllSlots().subscribe(
      (data:any)=>{
        console.log(data);
        this.formDataBind(data[0]);
     }
    );
}
formDataBind(item:slot)
{
  this.slot_edit.patchValue({
    slot_register_id:item.vehicle_type,
      vehicle_type:item.vehicle_model,
      vehicle_model:item.vehicle_model,
      service_type:item.service_type,
      time_period: item.time_period,
      pickup_time: item.pickup_time,
      pickup_address: item.pickup_address,
      requirment:item.requirment,
      drop_address:item.drop_address,
      allotment_emp_id:item.allotment_emp_id
     });
  }
  onSlotEdit(item:slot)
  {

    let x:number=item.slot_register_id;
    this._slotdata.updateSlot(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/Slot']);
      }
    );
  }
}
