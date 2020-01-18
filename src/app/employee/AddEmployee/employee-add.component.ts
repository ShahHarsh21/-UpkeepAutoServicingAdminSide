import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeedataService } from '../employeedata.service';
import { Router } from '@angular/router';
import { employee } from '../employee-display/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  addemployee:FormGroup;
  constructor(private _data:EmployeedataService,private router:Router) { }

  ngOnInit() {

    this.addemployee=new FormGroup({

      employee_id: new FormControl(null),
      employee_img: new FormControl(null),
      employee_designation: new FormControl(null),
      salary: new FormControl(null),
      employee_type: new FormControl(null),
      fk_user_id: new FormControl (null)
    });
  }
  onEmployeeAdd()
  {
    let item=this.addemployee.value;
    this._data.addEmployee(item).subscribe(
      (data:employee)=>{
        console.log(data);
        this.router.navigate(['employee']);
      }
    );
  }

}
