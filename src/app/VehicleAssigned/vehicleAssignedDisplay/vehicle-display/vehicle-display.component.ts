import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleModel } from 'src/app/VehicleModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VehicleAssignedService } from '../../vehicle-assigned.service';
import { Router } from '@angular/router';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';
import { MatDialog } from '@angular/material/dialog';
import { VehicleviewmoreComponent } from '../../vehicleviewmore/vehicleviewmore.component';

@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrls: ['./vehicle-display.component.css']
})
export class VehicleDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','vehicle_no','worker_name','status','Action'];
  dataSource: MatTableDataSource<VehicleAssignedModel>;
  vehiclearr:VehicleAssignedModel[]=[];
  deletevehiclearr:number[]=[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:VehicleAssignedService,public _routes:Router,public _dialog:MatDialog) {
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this._data.getAllVehicleAssigned().subscribe(
      (data: VehicleAssignedModel[]) => {
          console.log(data);
          this.vehiclearr=data
          this.dataSource.data = this.vehiclearr;
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
      this._routes.navigate(['/nav/vehicleAssignedAdd']);
  }
  onDelete(item)  {
    console.log(item)
       if (confirm("Are you sure you want to delete"))
        {
          this._data.deleteVehicle_assigned(item.vehicle_assigned_id).subscribe(
          (data)=>{
            this.vehiclearr.splice(this.vehiclearr.indexOf(item),1);
            this.dataSource.data=this.vehiclearr;
            alert("Record is deleted");
        }
        );
      }
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._data.DeleteAllVehicle_assigned(this.deletevehiclearr).subscribe(
        (data:VehicleAssignedModel)=>{
          for(let i=0;i<this.deletevehiclearr.length;i++)
          {
                let x=this.vehiclearr.find(x => x.vehicle_assigned_id == this.deletevehiclearr[i]);
                this.vehiclearr.splice(this.vehiclearr.indexOf(x),1);
          }
          this.dataSource.data=this.vehiclearr;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
    }
  }
  onchecheckboxchange(row)
  {
    if(this,this.vehiclearr.find(x => x == row.worker_id))
    {
        this.deletevehiclearr.splice(this.deletevehiclearr.indexOf(row.worker_id),1);
    }
    else{
      this.deletevehiclearr.push(row.worker_id);
    }
  }
  onViewMore(row)
  {
    this._routes.navigate(['/nav/VehicleAssignedViewmore/'+row.vehicle_assigned_id]);
  }
}
