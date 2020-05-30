import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Leave } from '../../leave';
import { LeaveDataService } from '../../leave-data.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { WorkerService } from 'src/app/worker/worker.service';
@Component({
  selector: 'app-leave-display',
  templateUrl: './leave-display.component.html',
  styleUrls: ['./leave-display.component.css']
})
export class LeaveDisplayComponent implements OnInit {

  displayedColumns:string[]=['check','worker_name','LeaveStartDate','LeaveEndDate','Leave_type','status','Action'];
  dataSource: MatTableDataSource<Leave>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _leaveService : LeaveDataService,public _workerService : WorkerService,public _routs : Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._leaveService.getAllLeave().subscribe(
      (LeaveData : Leave[])=>{
        console.log(LeaveData);
        this.dataSource.data = LeaveData;
      }
    );
  }

  applyFilter(value)
  {

  }

  oncheckboxchange(row)
  {

  }

  onAddClick()
  {

  }

  onDelete(row)
  {

  }

  onEdit(row)
  {
    this._routs.navigate(['/nav/leaveEdit/'+row.leave_id]);
  }

  onViewMore(row)
  {
    this._routs.navigate(['/nav/leaveViewmore/'+row.leave_id]);
  }

  onViewPastLeave(row)
  {
    console.log(row);
    this._routs.navigate(['/nav/pastLeave/'+row.leave_id]);
  }

  onDeleteAll()
  {

  }
}
