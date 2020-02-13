import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogRef, MatDialog } from '@angular/material';
import { color_class } from '../color';
import { ColordataService } from '../colordata.service';
import { Router } from '@angular/router';
import { ColorAddComponent } from '../color-add/color-add.component';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent implements OnInit {
  displayedColumns:string[]=['color_name','Action'];
  colorarr:color_class[]=[];
  dataSource: MatTableDataSource<color_class>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  constructor(private _data:ColordataService,private _routs:Router,private _dialogref:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllColor().subscribe(
      (data:any)=>{
        this.colorarr=data;
        this.dataSource.data=this.colorarr;
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
  onDelete(row)
  {
    if(confirm("ARE YOU SURE YOU WANT TO DELETE THE RECORD?"))
    {
      this._data.deleteColor(row.color_id).subscribe(
        (data:any)=>{
          this.colorarr.splice(this.colorarr.indexOf(data),1);
          this.dataSource.data=this.colorarr;
          this._routs.navigate(['nav/color/']);
        }
      );
    }
  }
  onAddClick()
  {
    this._dialogref.open(ColorAddComponent);
  }
}
