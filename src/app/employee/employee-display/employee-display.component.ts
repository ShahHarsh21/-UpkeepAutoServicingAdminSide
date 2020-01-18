import { Component, OnInit, ViewChild } from '@angular/core';
import { employee } from './employee';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { EmployeedataService } from '../employeedata.service';
import { Router } from '@angular/router';
import { EmpViewmoreComponent } from '../employeeviewmore/emp-viewmore/emp-viewmore.component';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  displayedColumns:string[]=['employee_designation','salary','employee_type','Action'];
  productarr:employee[]=[];
  dataSource: MatTableDataSource<employee>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:EmployeedataService,private _routs:Router,private _dialogref:MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this._data.getAllEmployee().subscribe(
      (data:any)=>{
        console.log(data);
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
      this._data.deleteemployee(row.employee_id).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
    }
  }
  onEdit(row)
  {
    this._routs.navigate(['EmployeeEdit']);
  }
  onViewMore(row)
  {
    this._dialogref.open(EmpViewmoreComponent,{data:row});
  }
  onAddClick()
  {
    this._routs.navigate(['EmployeeAdd']);
  }
}
