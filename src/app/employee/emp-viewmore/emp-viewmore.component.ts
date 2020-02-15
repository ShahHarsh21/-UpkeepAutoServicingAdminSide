import { Component, OnInit, Inject } from '@angular/core';
import { employee } from '../employee-display/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

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
  user_id: number=0;
  email_id: string='';
  password: string='';
  user_name:string='';
  mobile_no: number=0;
  address: string='';
  date_of_birth: Date;
  user_type:string='';
  EmpImage: string = '';
   constructor(public dialogref: MatDialogRef<EmpViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: employee) { }

  ngOnInit() {
    this.employee_id=this.data.employee_id;
    this.employee_img=this.data.employee_img;
    this.employee_designation=this.data.employee_designation;
    this.salary=this.data.salary
    this.employee_type=this.data.employee_type;
    this.fk_user_id=this.data.fk_user_id;
    this.email_id=this.data.email_id;
    this.user_name=this.data.user_name;
    this.mobile_no=this.data.mobile_no;
    this.address=this.data.address;
    this.date_of_birth=this.data.date_of_birth;
    this.user_type=this.data.user_type;
    this.EmpImage = environment.url + 'images/EmployeeImages/' + this.data.employee_img;
  }

  onClickCancel()
  {
    this.dialogref.close();
  }
}
