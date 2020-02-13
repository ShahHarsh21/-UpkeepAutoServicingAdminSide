import { Component, OnInit, Inject } from '@angular/core';
import {MatCardActions, MatCardTitle, MatCardSubtitle, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { employee } from 'src/app/employee/employee-display/employee';
import { Router } from '@angular/router';
import { EmployeeAllotdataService } from '../../employee-allotdata.service';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-deliveryboy-viewmore',
  templateUrl: './deliveryboy-viewmore.component.html',
  styleUrls: ['./deliveryboy-viewmore.component.css']
})
export class DeliveryboyViewmoreComponent implements OnInit {
  empData:employee[]=[];
  EmpImage:string= environment.url+ 'Images/EmployeeImages/';
  checkedArr:number[] = [];
  employee_id:number=0;
  public obj:any;

  constructor(public _router:Router,public _worker_Data:EmployeeAllotdataService,public _data:EmployeedataService,public dialogref: MatDialogRef<DeliveryboyViewmoreComponent>,@Inject(MAT_DIALOG_DATA) public dataSlotID:number){ }

  ngOnInit() {
    console.log(this.dataSlotID);
    this._data.getAllEmpWithDeliverBoy().subscribe(
      (data:any)=>{
        console.log(data);
        this.empData=data;
        console.log(data[0].employee_id);
        this.employee_id=data[0].employee_id;
      }
    );
  }

  onChecked(emp_id:number)
  {

    if(this.checkedArr.indexOf(emp_id) == -1)
    {
      this.checkedArr.push(emp_id);
    }
    else
    {
      this.checkedArr.splice(this.checkedArr.indexOf(emp_id), 1);
    }
    console.log(this.checkedArr);
  }

  onAllotSubmitClick()
  {
    console.log("confirm");
    console.log(this.employee_id);
    this.obj={
      fk_slot_id : this.dataSlotID,
      fk_employee_id : this.employee_id
    };
    console.log(this.obj);
     this._worker_Data.AddEmpAllot(this.obj).subscribe(
      (data:any)=>{
        console.log(data);
        this.dialogref.close();
        this._router.navigate(['/nav/Slot/']);
      }
    );
  }

  onClickCancel()
  {
    this.dialogref.close();
  }
}
