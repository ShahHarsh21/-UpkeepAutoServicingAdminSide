import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { employee } from 'src/app/employee/employee-display/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { UserdataService } from 'src/app/user/userdata.service';
import { WorkerPopupComponent } from './PopUp/worker-popup/worker-popup.component';
import { slot } from '../../slot-display/slot';
import { SlotdataService } from '../../slotdata.service';

@Component({
  selector: 'app-worker-allot',
  templateUrl: './worker-allot.component.html',
  styleUrls: ['./worker-allot.component.css']
})
export class WorkerAllotComponent implements OnInit {
  displayedColumns:string[]=['employee_name','employee_designation','Action'];
  empArr:employee[]=[];
  emp_name:string[]=[];
  data:employee[];
  slot_id:number=0;
  slotArr:slot[]=[];
  selectedRadio:string="";
  options:String[]=['ADD TO QUEUE','ALLOT WORKER'];
  constructor(public _dataSlot:SlotdataService,public _act_routs:ActivatedRoute,private _dialog: MatDialog,private _userData:UserdataService,private _data:EmployeedataService,private _routs:Router,private _dialogref:MatDialog) {

  }
  public showQueueBtn = false;
ngOnInit() {
  this.slot_id = this._act_routs.snapshot.params['slot_register_id'];
  console.log(this.slot_id);
  this._dataSlot.getSlotById(this.slot_id).subscribe(
    (data:any)=>{
      this.slotArr=data;
    }
  );
  }

  radioValueCheck(x)
  {
    if(x=="addQueue")
    {
      this.showQueueBtn = true;
    }
    else
    {
      this.showQueueBtn = false;
    }
  }

  onAddToQueue()
  {
    console.log("QUEUE");
  }
  onAllotWorker()
  {
    console.log("CONFIRM");
    this._dialog.open(WorkerPopupComponent ,{data:this.slot_id});
  }
  onChange(index:number):number
  {
    if(index==1)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
}
