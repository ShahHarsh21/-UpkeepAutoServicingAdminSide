import { Component, OnInit, Inject } from '@angular/core';
import { employee } from '../../employee-display/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-emp-viewmore',
  templateUrl: './emp-viewmore.component.html',
  styleUrls: ['./emp-viewmore.component.css']
})
export class EmpViewmoreComponent implements OnInit {
  employee_id: number=0;
  employee_img: string='';
  employee_designation: string='';
  salary:string='';
  employee_type: string='';
  fk_user_id:number=0;
  constructor(public dialogref: MatDialogRef<EmpViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: employee) { }

  ngOnInit() {
    this.employee_id=this.data.employee_id;
    this.employee_img=this.data.employee_img;
    this.employee_designation=this.data.employee_designation;
    this.salary=this.data.salary
    this.employee_type=this.data.employee_type;
    this.fk_user_id=this.data.fk_user_id;
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
