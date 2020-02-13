import { Component, OnInit, ViewChild } from '@angular/core';
import { category } from '../category';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CategorydataService } from '../categorydata.service';
import { Router } from '@angular/router';
import { CategoryAddComponent } from '../category-add/category-add.component';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','category_name','Action'];
  categoryarr:category[]=[];
  deletecatarr:number[]=[];
  dataSource: MatTableDataSource<category>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:CategorydataService,private _routes:Router,private _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllCategory().subscribe(
      (data:category[])=>{
        console.log(data);
        this.categoryarr=data;
        this.dataSource.data=this.categoryarr;
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
          this._routes.navigate(['nav/category/']);
        }
      );
    }
  }
  onAddClick()
  {
    this._dialog.open(CategoryAddComponent);
  }
  oncheckboxchange(row:category)
  {
    if(this,this.categoryarr.find(x => x == row.category_id))
    {
        this.deletecatarr.splice(this.deletecatarr.indexOf(row.category_id),1);
    }
    else{
      this.deletecatarr.push(row.category_id);
    }
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteallCat(this.deletecatarr).subscribe(
      (data:category)=>{
        for(let i=0;i<this.deletecatarr.length;i++)
        {
              let x=this.categoryarr.find(x => x.category_id == this.deletecatarr[i]);
              this.categoryarr.splice(this.categoryarr.indexOf(x),1);
        }
        this.dataSource.data=this.categoryarr;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
   });
  }
  }

}

