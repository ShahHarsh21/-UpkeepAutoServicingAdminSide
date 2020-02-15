import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { color_class } from '../color';
import { ColordataService } from '../colordata.service';
import { Router } from '@angular/router';
import { ColorAddComponent } from '../color-add/color-add.component';
import { employee } from 'src/app/employee/employee-display/employee';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','color_name','Action'];
  colorarr:color_class[]=[];
  deletecolorarr:number[]=[];
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
  onDeleteAll(row)
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteAllColor(this.deletecolorarr).subscribe(
      (data:color_class)=>{
        for(let i=0;i<this.deletecolorarr.length;i++)
        {
              let x=this.colorarr.find(x => x.color_id == this.deletecolorarr[i]);
              this.colorarr.splice(this.colorarr.indexOf(x),1);
        }
        this.dataSource.data=this.colorarr;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
   });
  }
  }
  oncheckboxchange(row:color_class)
  {
    if(this,this.colorarr.find(x => x == row.color_id))
    {
        this.deletecolorarr.splice(this.deletecolorarr.indexOf(row.color_id),1);
    }
    else{
      this.deletecolorarr.push(row.color_id);
    }
  }

}
