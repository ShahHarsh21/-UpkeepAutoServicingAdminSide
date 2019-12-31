import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { slot } from './slot';
import { SlotdataService } from '../slotdata.service';
import { SlotViewmoreComponent } from '../slotviewmore/slot-viewmore/slot-viewmore.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-display',
  templateUrl: './slot-display.component.html',
  styleUrls: ['./slot-display.component.css']
})
export class SlotDisplayComponent implements OnInit {
  displayedColumns:string[]=['product_name','product_description','product_price','product_image','product_color','Action'];
  slotarr:slot[]=[];
  dataSource: MatTableDataSource<slot>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data:SlotdataService,private _dialog:MatDialog,private _routs:Router) { }

  ngOnInit() {
    this._data.getAllSlots().subscribe(
      (data:any)=>{
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
      this._routs.navigate(['slotAdd']);
  }
  onViewMore(row)
  {
    this._dialog.open(SlotViewmoreComponent,{data:row});
  }
  onEdit(row)
  {

  }
  onDelete(row)
  {

  }
}
