import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { slot } from '../../slot-display/slot';
import { SlotdataService } from '../../slotdata.service';
import { Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employee/employeedata.service';

@Component({
  selector: 'app-delivery-boy-allot',
  templateUrl: './delivery-boy-allot.component.html',
  styleUrls: ['./delivery-boy-allot.component.css']
})
export class DeliveryBoyAllotComponent implements OnInit {
  displayedColumns:string[]=['vehicle_type','vehicle_model','Action'];
  slotarr:slot[]=[];
  dataSource: MatTableDataSource<slot>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _emp_data:EmployeedataService,private _data:SlotdataService,private _dialog:MatDialog,private _router:Router) {
    this.dataSource = new MatTableDataSource();
  }
  onAddToQueue()
  {
    console.log("queue")

  }
  onClickConfirm()
  {
    console.log("confirm")
  }

  ngOnInit() {
    this._data.getAllSlots().subscribe(
      (data:any)=>{
        console.log(data);
        this.dataSource.data=data;
      }
    );
    // this._emp_data.getAllEmpWithDeliverBoy().subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //   }
    // );
  }
  applyFilter(filtervalue:string)
  {
      this.dataSource.filter = filtervalue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
     }
  }
  onViewMore(row)
  {
    // this._dialog.open(SlotViewmoreComponent,{data:row});
  }
  onAddToQueClick()
  {

  }
  onDeliveryBoyConfirm()
  {
    this._router.navigate(['/nav/worker_allot/']);
  }
}
