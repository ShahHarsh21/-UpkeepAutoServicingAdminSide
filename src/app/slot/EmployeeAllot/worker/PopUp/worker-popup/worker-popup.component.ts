import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { employee } from 'src/app/employee/employee-display/employee';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { EmployeeAllotdataService } from '../../../employee-allotdata.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EmpAllotment } from '../../EmpAllotement_class';

@Component({
  selector: 'app-worker-popup',
  templateUrl: './worker-popup.component.html',
  styleUrls: ['./worker-popup.component.css']
})
export class WorkerPopupComponent implements OnInit {
  empData:employee[];
  selectedChecked:employee[]=[];
  checked = false;
  checkedArr:number[] = [];
  EmpImage :string = environment.url+ 'Images/EmployeeImages/';
  employee_id:number=0;
  public obj:any;

  constructor(public _router:Router,
    public _worker_Data:EmployeeAllotdataService,
    public _data:EmployeedataService,
    public dialogref: MatDialogRef<WorkerPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSlotID:number) { }

  ngOnInit() {
    console.log(this.dataSlotID);
    this._data.getAllEmpWithMachanic().subscribe(
      (data:any)=>{
        console.log(data);
        this.empData=data;
        this.employee_id=data[0].employee_id;
        console.log(this.employee_id);
      }
    );
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
  onChecked(emp_id:number)
  {
    if(this.checkedArr.indexOf(emp_id) == -1) {
      this.checkedArr.push(emp_id);
    }
    else {
      this.checkedArr.splice(this.checkedArr.indexOf(emp_id), 1);
    }
    console.log(this.checkedArr);
  }


  onWorkerSubmitClick()
  {
    console.log("confirm");
    console.log(this.employee_id);
    this.obj={
      fk_slot_id: this.dataSlotID,
      fk_employee_id: this.employee_id
    };
     this._worker_Data.AddEmpAllot(this.obj).subscribe(
      (data:any)=>{
        console.log(data);
        this._worker_Data.AddEmpAllot(this.obj).subscribe(
          (data:any)=>{
            console.log(data);
            this.dialogref.close();
            this._router.navigate(['/nav/deliveryboy_allot/']);
          }
        );
      }
    );
  }
}
