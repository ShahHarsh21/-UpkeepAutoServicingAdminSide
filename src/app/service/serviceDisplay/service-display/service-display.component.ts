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
import { service_with_all_class } from 'src/app/class/service_with_all_class';

@Component({
  selector: 'app-service-display',
  templateUrl: './service-display.component.html',
  styleUrls: ['./service-display.component.css']
})
export class ServiceDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','vehicle_no','meter_reading','fuel_tank','Action'];
  serviceArr:service_with_all_class[]=[];
  deleteServiceArr:number[]=[];
  dataSource: MatTableDataSource<Service_class>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  flag :number = 0;
  constructor(public _service_data:ServiceDataService,public _router:Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._service_data.getAllServiceWithAll().subscribe(
      (data:any)=>{
        this.dataSource.data=data;
        console.log(this.dataSource.data);
        this.serviceArr=data;
        if(data[0].status == "Assigned")
        {
          this.flag = 1;
        }
        else
        {
          this.flag = 0;
        }
      }
    );
  }
  onSearchKeyPress(filtervalue : string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter(filtervalue:string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  onAddClick()
  {
    this._router.navigate(['/nav/serviceAdd']);
  }
  // oncheckboxchange(row)
  // {
  //   if(this.deleteServiceArr.find(x => x == row.service_id))
  //   {
  //       this.deleteServiceArr.splice(this.deleteServiceArr.indexOf(row.service_id),1);
  //   }
  //   else
  //   {
  //     this.deleteServiceArr.push(row.service_id);
  //   }
  // }
  onDelete(row)
  {
    let x:number = this.serviceArr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._service_data.deleteService(row.service_id).subscribe(
        (data:any)=>{
          this.serviceArr.splice(this.serviceArr.indexOf(row),1);
          this.dataSource.data=this.serviceArr;
          this._router.navigate(['nav/service/']);
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
    this._router.navigate(['/nav/serviceViewmore/'+row.service_id]);
  }
}
