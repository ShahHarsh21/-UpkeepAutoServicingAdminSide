import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { employee } from 'src/app/employee/employee-display/employee';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { EmployeeAllotdataService } from '../../../employee-allotdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-popup',
  templateUrl: './worker-popup.component.html',
  styleUrls: ['./worker-popup.component.css']
})
export class WorkerPopupComponent implements OnInit {
  empData:employee[];
  selectedChecked:employee[]=[];
  checked = false;
  checkedArr:employee[]=[];
  constructor(public _router:Router,public _worker_Data:EmployeeAllotdataService,public _data:EmployeedataService,public dialogref: MatDialogRef<WorkerPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: employee) { }

  ngOnInit() {
    this._data.getAllEmpWithMachanic().subscribe(
      (data:any)=>{
        console.log(data)
        this.empData=data;
        console.log(this.empData)
      }
    );
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
  onChecked(item)
  {

  }
  onWorkerSubmitClick(item)
  {
    if(this.checked==true)
    {
      this._worker_Data.AddEmpAllot(item).subscribe(
          (data:any)=>{
            console.log(data);
            this._router.navigate(['/nav/deliveryboy_allot/']);
          }
        );
    }
    console.log(this.checkedArr[0]);
    //
  }
}
