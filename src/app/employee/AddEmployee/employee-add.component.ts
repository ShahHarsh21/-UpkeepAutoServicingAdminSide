import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeedataService } from '../employeedata.service';
import { Router } from '@angular/router';
import { employee } from '../employee-display/employee';
import { UserdataService } from 'src/app/user/userdata.service';
import { user } from 'src/app/user/user';
import { emp_type } from '../emp_type_class';
import { emp_designation } from '../emp_designation_class';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  addemployee:FormGroup;
  user:string[]=[];
  emp:employee[]=[];
  userArr:emp_type[]=[];
  typeArr:emp_type[]=[];
  designationArr:emp_designation[]=[];
  constructor(private _data:EmployeedataService,private _userdata:UserdataService,private router:Router) { }

  ngOnInit() {

    this.addemployee=new FormGroup({

      employee_id: new FormControl(null),
      employee_img: new FormControl(null),
      employee_designation: new FormControl(null),
      salary: new FormControl(null),
      user_id:new FormControl(null),
      email_id: new FormControl(null),
      password: new FormControl(null),
      user_name:new FormControl(null),
      mobile_no: new FormControl(null),
      address: new FormControl(null),
      fk_user_id:new FormControl(null),
      date_of_birth: new FormControl(null),
      user_type:new FormControl(null)
    });
    this._userdata.getAllUser().subscribe(
      (data:any)=>{
        console.log(data);
       this.userArr=data;
        this.user=data;
        this.type_data(data)
      }
    );
  }
  onEmployeeAdd()
  {
    let item=this.addemployee.value;
    console.log(item);
    let user={
      email_id:this.addemployee.value.email_id,
      password:this.addemployee.value.password,
      user_name:this.addemployee.value.user_name,
      mobile_no:this.addemployee.value.mobile_no,
      address: this.addemployee.value.address,
      date_of_birth:this.addemployee.value.date_of_birth,
      user_type:this.addemployee.value.user_type
    };
    let emp={
      employee_img:this.addemployee.value.employee_img,
      employee_designation:this.addemployee.value.employee_designation,
      salary:this.addemployee.value.salary,
      fk_user_id:null
    };
    this._userdata.addUser(user).subscribe((data:any)=>{
      console.log(data);
      console.log(data.insertId);
     emp.fk_user_id=data.insertId
     console.log(emp.fk_user_id)


      this._data.addEmployee(emp).subscribe(
        (data:employee)=>{
          console.log(data);
          this.router.navigate(['/nav/Employee']);
        }
      );
      alert("USER MA ADD THAI GAYU");
    });

  }
  type_data(item:employee)
    {
      this._data.getAllType(item.fk_user_id).subscribe(
        (data:any)=>{
          console.log(data);
          this.typeArr=data;
        }
      );
      this._data.getAllDesignation(item.employee_id).subscribe(
        (designationData:any)=>{
          console.log(designationData);
            this.designationArr=designationData;
        }
      );

    }
}
