import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleModel } from 'src/app/VehicleModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VehicleAssignedService } from '../../vehicle-assigned.service';
import { Router } from '@angular/router';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';

@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrls: ['./vehicle-display.component.css']
})
export class VehicleDisplayComponent implements OnInit {
  displayedColumns:string[]=['vehicle_no','worker_name','status'];
  dataSource: MatTableDataSource<VehicleAssignedModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:VehicleAssignedService,public _routes:Router) {
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this._data.getAllVehicleAssigned().subscribe(
      (data: VehicleAssignedModel[]) => {
          console.log(data);
          this.dataSource.data = data;
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

}
