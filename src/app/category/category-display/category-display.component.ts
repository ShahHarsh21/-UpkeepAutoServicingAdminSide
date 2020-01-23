import { Component, OnInit, ViewChild } from '@angular/core';
import { category } from '../category';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CategorydataService } from '../categorydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  displayedColumns:string[]=['category_name','category_type','Action'];
  categoryarr:category[]=[];
  dataSource: MatTableDataSource<category>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:CategorydataService,private _routes:Router,private _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (data:category[])=>{
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
  onDelete(row)
  {
    let x:number = this.categoryarr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteCategory(row.category_id).subscribe(
        (data:any)=>{
          console.log(data);
          this.categoryarr.splice( this.categoryarr.indexOf(row),1);
          this.dataSource.data=this.categoryarr;
        }
      );
    }
  }
  onEdit(row)
  {
    this._routes.navigate(['categoryEdit']);
  }
  onAddClick()
  {
    this._routes.navigate(['/nav/categoryAdd']);
  }
}
