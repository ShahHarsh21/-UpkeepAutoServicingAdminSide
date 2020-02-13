import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { slot } from '../../slot-display/slot';
import { SlotdataService } from '../../slotdata.service';
import { Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { employee } from 'src/app/employee/employee-display/employee';
import { DeliveryboyViewmoreComponent } from './viewmore/deliveryboy-viewmore.component';

@Component({
  selector: 'app-delivery-boy-allot',
  templateUrl: './delivery-boy-allot.component.html',
  styleUrls: ['./delivery-boy-allot.component.css']
})
export class DeliveryBoyAllotComponent implements OnInit {
  displayedColumns:string[]=['vehicle_type','vehicle_model','Action'];
  slotarr:slot[]=[];
  EMPIMG:string='';
  empData:employee[]=[];
  slot_id:number=0;
  constructor(private _emp_data:EmployeedataService,private _data:SlotdataService,private _dialog:MatDialog,private _router:Router) {
  }
  ngOnInit() {
    this._data.getAllSlots().subscribe(
      (data:any)=>{
        console.log(data);
        this.slot_id=data[0].slot_register_id;
        console.log(this.slot_id);
      }
    );
    this._emp_data.getAllEmpWithDeliverBoy().subscribe(
      (data:employee[])=>{
        this.empData=data;
        console.log(this.empData);
      }
    );
  }

  onDeliveryBoyClick()
  {
    console.log(this.slot_id);
    this._dialog.open(DeliveryboyViewmoreComponent,{data:this.slot_id});
  }
  onClickConfirm()
  {
    console.log("confirm")
    this._router.navigate(['/nav/Slot']);
  }

}
