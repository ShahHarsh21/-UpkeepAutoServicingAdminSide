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
  displayedColumns:string[]=['vehicle_type','vehicle_model','Action'];
  slotarr:slot[]=[];
  dataSource: MatTableDataSource<slot>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data:SlotdataService,private _dialog:MatDialog,private _router:Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllSlots().subscribe(
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
  onAddClick()
  {
      this._router.navigate(['/nav/slotAdd']);
  }
  onViewMore(row)
  {
    this._dialog.open(SlotViewmoreComponent,{data:row});
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/slotEdit/'+row.slot_register_id]);
  }
  onDelete(row)
  {
    let x:number = this.slotarr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteSlot(row.slot_register_id).subscribe(
        (data:any)=>{
          console.log(data);
         this.slotarr.splice(this.slotarr.indexOf(row),1);
          this.dataSource.data=this.slotarr;
          this._router.navigate(['/nav/Slot']);
        }
      );
    }
  }
}
