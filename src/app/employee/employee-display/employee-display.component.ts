import { Component, OnInit, ViewChild } from '@angular/core';
import { employee } from './employee';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { EmployeedataService } from '../employeedata.service';
import { Router } from '@angular/router';
import { EmpViewmoreComponent } from '../employeeviewmore/emp-viewmore/emp-viewmore.component';
import { UserdataService } from 'src/app/user/userdata.service';
import { user } from 'src/app/user/user';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  displayedColumns:string[]=['employee_name','employee_designation','Action'];
  empArr:employee[]=[];
  emp_name:string[]=[];
  dataSource: MatTableDataSource<employee>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _userData:UserdataService,private _data:EmployeedataService,private _routs:Router,private _dialogref:MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this._data.getAllEmployeeWithUserName().subscribe(
      (data:any)=>{
        this.dataSource.data=data;
      }
    );
    this._data.getAllEmployeeWithUserName().subscribe(
      (data:employee[])=>{
        this.empArr=data;
        this.dataSource.data=data;
      }
    );
  }

    applyFilter(filtervalue:string)
    {
      this.dataSource.filter = filtervalue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }

  }
  onDelete(row)
  {
    if(confirm("ARE YOU SURE YOU WANT TO DELETE THIS RECORE?"))
    {
      this._data.deleteEmployee(row.employee_id).subscribe(
        (data:any)=>{
          this.empArr.splice(this.empArr.indexOf(row),1);
          this.dataSource.data=this.empArr;
          this._routs.navigate(['/nav/Employee/']);
        }
      );
    }
  }
  onEdit(row)
  {
    this._routs.navigate(['/nav/EmployeeEdit/'+row.employee_id]);
  }
  onViewMore(row)
  {
    this._dialogref.open(EmpViewmoreComponent,{data:row});
  }
  onAddClick()
  {
    this._routs.navigate(['/nav/EmployeeAdd']);
  }
}
