import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeedataService } from '../employeedata.service';
import { employee } from '../employee-display/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { emp_type } from '../emp_type_class';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  // empEdit:FormGroup;
  // employee_id:number=0;
  // employee_img:string='';
  // employee_designation:string='';
  // salary:string='';
  // employee_type:number=0;
  // fk_user_id:number=0;
  // user_id: number=0;
  // email_id: string='';
  // user_name:string='';
  // mobile_no: number=0;
  // address: string='';
  // date_of_birth: Date;
  // user_type:string='';
  editEmployee: FormGroup;
  rout: string = '';
  typeArr: emp_type[] = [];
  designationArr: string[] = [];
  EmpImage: string = '';
  selectedFile: File = null;

  constructor(private _data: EmployeedataService, private _routs: Router, private _act_routs: ActivatedRoute) {
    this.editEmployee = new FormGroup({
      employee_id: new FormControl(null),
      employee_img: new FormControl(null),
      employee_designation: new FormControl("Supretender"),
      salary: new FormControl(null),
      fk_user_id: new FormControl(null),
      user_id: new FormControl(null),
      email_id: new FormControl(null),
      user_name: new FormControl(null),
      mobile_no: new FormControl(null),
      address: new FormControl(null),
      date_of_birth: new FormControl(null),
      user_type: new FormControl("Employee")
    });
  }

  ngOnInit() {
    this.rout = this._act_routs.snapshot.params['employee_id'];
    console.log(this.rout);
    this._data.getEmployeeById(this.rout).subscribe(
      (data: any) => {
        console.log(data[0]);
        this.formDataBind(data[0]);
      }
    );
    this._data.getAllPhoto(this.rout).subscribe(
      (data: any) => {
      }
    );
  }

  onchange(f) {
    this.selectedFile = <File>f.target.files[0];
    console.log(this.selectedFile);
  }
  formDataBind(item: employee) {

    this.editEmployee.patchValue({
      employee_id: item.employee_id,
      employee_img: item.employee_img,
      employee_designation: item.employee_designation,
      salary: item.salary,
      fk_user_id: item.fk_user_id,
      user_id: item.user_id,
      email_id: item.email_id,
      user_name: item.user_name,
      mobile_no: item.mobile_no,
      address: item.address,
      date_of_birth: item.date_of_birth,
    });
    this.EmpImage = environment.url + 'images/EmployeeImages/' + item.employee_img;
    console.log(this.EmpImage);
  }
  onEmployeeEdit() {
    console.log(this.editEmployee.value);
    this._data.updateemployee(this.editEmployee.value.employee_id, this.editEmployee.value).subscribe(
      (data: any) => {
        console.log(data);
        this._routs.navigate(['/nav/Employee/']);
      });

    const fd = new FormData();
    if (this.selectedFile != null) {
      console.log(this.selectedFile);
      fd.append("img", this.selectedFile, this.selectedFile.name);
    }
    else {
      fd.append("img", this.editEmployee.value.employee_img);
    }
    console.log(this.editEmployee.value);

    this._data.updatePhoto(this.editEmployee.value.employee_id, fd).subscribe(
      (data: any) => {
        console.log(data);
        alert("YOU IMAGE HAS BEEN UPDATED");
        this._routs.navigate(['/nav/Employee']);
      }
    );
  }
  onCancle()
  {
    this._routs.navigate(['/nav/Employee']);
  }
}
