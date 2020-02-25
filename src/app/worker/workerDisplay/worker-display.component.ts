import { Component, OnInit, ViewChild } from '@angular/core';
import { worker } from '../worker';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';
import { WorkerviewmoreComponent } from '../workerViewmore/workerviewmore.component';

@Component({
  selector: 'app-worker-display',
  templateUrl: './worker-display.component.html',
  styleUrls: ['./worker-display.component.css']
})
export class WorkerDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','email_id','worker_name','Action'];
  workerarr:worker[]=[];
  deleteworkerarr:number[]=[];
  dataSource: MatTableDataSource<worker>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:WorkerService, private _dialog:MatDialog, private _router:Router) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllWorker().subscribe(
      (data:any)=>{
            this.workerarr=data;
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

  onAddClick()
  {
    this._router.navigate(['/nav/workerAdd/']);
  }
  onchecheckboxchange(row)
  {
    if(this,this.workerarr.find(x => x == row.worker_id))
    {
        this.deleteworkerarr.splice(this.deleteworkerarr.indexOf(row.worker_id),1);
    }
    else{
      this.deleteworkerarr.push(row.worker_id);
    }
  }
  onDelete()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._data.deleteAllWorkerByid(this.deleteworkerarr).subscribe(
        (data:worker)=>{
          for(let i=0;i<this.deleteworkerarr.length;i++)
          {
                let x=this.workerarr.find(x => x.worker_id == this.deleteworkerarr[i]);
                this.workerarr.splice(this.workerarr.indexOf(x),1);
          }
          this.dataSource.data=this.workerarr;
         this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
  }
}
onEdit(row)
{
  this._router.navigate(['/nav/workerEdit/'+row.worker_id]);
}
onViewMore(row)
{
  this._dialog.open(WorkerviewmoreComponent,{data:row.worker_id});
}
onAddImage(row)
{
  this._router.navigate(['/nav/wokerImage/'+row.worker_id]);
}
}
