import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../user';
import { emp_type } from 'src/app/employee/emp_type_class';
import { Type } from '@angular/compiler';
import { EmployeedataService } from 'src/app/employee/employeedata.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  [x: string]: any;
  userEdit:FormGroup;
  user_rout:number=0;
  typeArr:emp_type[]=[];
  constructor(public _emp_data:EmployeedataService,public _data:UserdataService,public _act_routs:ActivatedRoute,public _routs:Router) {

  }

  ngOnInit() {

      this.user_rout=this._act_routs.snapshot.params['user_id'];
      console.log( this.user_rout);

    this.userEdit=new FormGroup({
      user_id:new FormControl(),
      email_id:new FormControl(),
      password:new FormControl(),
      user_name:new FormControl(),
      mobile_no:new FormControl(),
      address:new FormControl(),
      date_of_birth:new FormControl(),
      user_type:new FormControl()
    });

    this._data.getUserById(this.user_rout).subscribe(
        (data:any)=>{
          console.log(data);
          this.formDataBind(data[0]);
       }
      );
  }
  formDataBind(item:user)
  {
    this.userEdit.patchValue({
      user_id:item.user_id,
      email_id:item.email_id,
      password:item.password,
      user_name:item.user_name,
      mobile_no:item.mobile_no,
      address:item.address,
      date_of_birth:item.date_of_birth,
      user_type:item.user_type
    });
  }
  onUserEdit()
  {
    // console.log(this.userEdit.value);
    // console.log(this.userEdit.value.user_type);
    this.userEdit.value.user_type="employee";
    if(this.userEdit.value.user_type == "employee")
    {
      console.log(this.userEdit.value);
      this._emp_data.addEmployee(this.user_rout).subscribe(
        (data:any)=>{
          console.log(data);
          this._routs.navigate(['/nav/user']);
        }
      );
    }
    else
    {
      this._data.updateUser(this.userEdit.value).subscribe(
        (data:any)=>{
          console.log(data);
          this._routs.navigate(['/nav/user/']);
        }
      );

    }
  }
  onCancle()
  {
	this._router.navigate(['/nav/user/']);
  }
}
