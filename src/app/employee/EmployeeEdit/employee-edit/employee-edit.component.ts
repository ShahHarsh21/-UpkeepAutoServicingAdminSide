import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeedataService } from '../../employeedata.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  // empEdit:FormGroup;
  employee_id:number=0;
  employee_img:string='';
  employee_designation:string='';
  salary:string='';
  employee_type:number=0;
  fk_user_id:number=0;
  constructor(private _data:EmployeedataService) { }

  ngOnInit() {
    this._data.getEmployeeById(this.employee_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.employee_id=data[0].employee_id;
        this.employee_img=data[0].employee_img;
        this.employee_designation=data[0].employee_designation;
        this.salary=data[0].salary;
        this.employee_type=data[0].employee_type;
        this.fk_user_id=data[0].fk_user_id;
      }
    );
  //   this.empEdit=new FormGroup({
  //     employee_id:new FormControl(null),
  //     employee_img:new FormControl(null),
  //     employee_designation:new FormControl(null),
  //     salary:new FormControl(null),
  //     employee_type:new FormControl(null),
  //     fk_user_id:new FormControl(null)
  //   })
  }
  onEmployeeEdit(item)
  {
    console.log(this.employee_id=item.employee_id);
    this._data.updateemployee(item.employee_id,item).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }
}
