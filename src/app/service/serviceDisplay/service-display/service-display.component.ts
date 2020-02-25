import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

//import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Service_class } from '../../service_class';
import { ServiceDataService } from '../../service-data.service';
import { Router } from '@angular/router';
import { ServiceViewmoreComponent } from '../../serviceViewMore/service-viewmore/service-viewmore.component';

@Component({
  selector: 'app-service-display',
  templateUrl: './service-display.component.html',
  styleUrls: ['./service-display.component.css']
})
export class ServiceDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','vehicle_no','meter_reading','fuel_tank','Action'];
  serviceArr:Service_class[]=[];
  deleteServiceArr:number[]=[];
  dataSource: MatTableDataSource<Service_class>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _service_data:ServiceDataService,public _router:Router,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._service_data.getAllService().subscribe(
      (data:any)=>{
        console.log(data);
        this.dataSource.data=data;
        // this.serviceArr=data;
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
    this._router.navigate(['/nav/serviceAdd']);
  }
  oncheckboxchange(row)
  {
    if(this.deleteServiceArr.find(x => x == row.service_id))
    {
        this.deleteServiceArr.splice(this.deleteServiceArr.indexOf(row.service_id),1);
    }
    else
    {
      this.deleteServiceArr.push(row.service_id);
    }
  }
  onDelete()
  {
    console.log(this.deleteServiceArr);
    if(confirm('Are You Sure To Delete Multiple User?'))
    {

      this._service_data.deleteAllService(this.deleteServiceArr).subscribe(
        (Data:any)=>{
          console.log(Data);
        }
      );
    }
}
  onEdit(row)
  {
    this._router.navigate(['/nav/serviceEdit/'+row.service_id]);
  }
  onViewMore(row)
  {
    this._dialog.open(ServiceViewmoreComponent,{data:row});
  }
}
