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
  leavearr:Leave[]=[];
  deleteleavearr:number[]=[];
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

  applyFilter(filtervalue:string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  oncheckboxchange(row:Leave)
  {
    if(this,this.leavearr.find(x => x == row.leave_id))
    {
        this.deleteleavearr.splice(this.deleteleavearr.indexOf(row.leave_id),1);
    }
    else{
      this.deleteleavearr.push(row.leave_id);
    }
  }
  onAddClick()
  {
      this._routs.navigate(['/nav/leaveAdd']);
  }
  onDelete(row)
  {
    let x:number = this.leavearr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._leaveService.deleteleave(row.user_id).subscribe(
        (data:any)=>{
          this.leavearr.splice(this.leavearr.indexOf(row),1);
          this.dataSource.data=this.leavearr;
          this._routs.navigate(['nav/leave/']);
        }
      );
    }
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
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._leaveService.DeleteAllLeave(this.deleteleavearr).subscribe(
        (data:Leave)=>{
          for(let i=0;i<this.deleteleavearr.length;i++)
          {
                let x=this.leavearr.find(x => x.leave_id == this.deleteleavearr[i]);
                this.leavearr.splice(this.leavearr.indexOf(x),1);
          }
          this.dataSource.data=this.leavearr;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
  }
}
}
