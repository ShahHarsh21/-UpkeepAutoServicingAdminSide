import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { employee } from 'src/app/employee/employee-display/employee';
import { Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employee/employeedata.service';
import { UserdataService } from 'src/app/user/userdata.service';
import { user } from 'src/app/user/user';

@Component({
  selector: 'app-worker-allot',
  templateUrl: './worker-allot.component.html',
  styleUrls: ['./worker-allot.component.css']
})
export class WorkerAllotComponent implements OnInit {
  displayedColumns:string[]=['employee_name','employee_designation','Action'];
  empArr:employee[]=[];
  emp_name:string[]=[];
  selectedRadio:string="";
  options:String[]=['ADD TO QUEUE','ALLOT WORKER'];
  dataSource: MatTableDataSource<employee>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _dialog: MatDialog,private _user_data:UserdataService,private _userData:UserdataService,private _data:EmployeedataService,private _routs:Router,private _dialogref:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }


  public showQueueBtn = false;

radioValueCheck(x) {

    if(x=="addQueue")
    {
      this.showQueueBtn = true;
    }
    else {
      this.showQueueBtn = false;
    }
}


  ngOnInit() {
    this._data.getAllEmpWithMachanic().subscribe(
      (data:employee[])=>{
        console.log(data);
        this.dataSource.data=data;
      }
    );
    this._data.getAllEmployeeWithUserName().subscribe(
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
  onAllotWorker(row)
  {
    // this._dialog.open(,{data:row});
  }
  onAddToQueue()
  {
    console.log("QUEUE");
  }
  onClickConfirm()
  {
    console.log("CONFIRM");
  }
  onChange(index:number):number
  {
    if(index==1)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
}
