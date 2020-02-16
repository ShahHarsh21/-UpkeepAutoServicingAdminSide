import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StockdataService } from '../Stockdata.service';
import { stock } from '../stock';
import { Router } from '@angular/router';
import { StockViewmoreComponent } from '../stockViewMore/stock-viewmore/stock-viewmore.component';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  stockarr:stock[]=[];
  deletestockarr:number[]=[];
  displayedColumns:string[]=['check','quantity','Action'];
  dataSource: MatTableDataSource<stock>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:StockdataService,public _router:Router,private _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
      this._data.getAllStock().subscribe(
        (data:stock[]) => {
          this.stockarr=data;
          this.dataSource.data=this.stockarr;
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
    let x:number=this.stockarr.indexOf(row);
    if(confirm("ARE YOU SURE , YOU WANT TO DELETE?"))
    {
      this._data.deleteStock(row.stock_id).subscribe(
       (data:any)=>{
       this.stockarr.splice(this.stockarr.indexOf(row),1);
       this.dataSource.data=this.stockarr;
          console.log(data);
          this._router.navigate(['nav/stock/']);
        }
      );
    }
  }
  oncheckboxchange(row:stock)
  {
    if(this,this.stockarr.find(x => x == row.stock_id))
    {
        this.deletestockarr.splice(this.deletestockarr.indexOf(row.stock_id),1);
    }
    else{
      this.deletestockarr.push(row.stock_id);
    }
  }
  onDeleteAll(row)
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteStock(this.deletestockarr).subscribe(
      (data:stock)=>{
        for(let i=0;i<this.deletestockarr.length;i++)
        {
              let x=this.stockarr.find(x => x.stock_id == this.deletestockarr[i]);
              this.stockarr.splice(this.stockarr.indexOf(x),1);
        }
        this.dataSource.data=this.stockarr;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
   });
  }
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/stockEdit/'+row.stock_id]);
  }
  onViewMore(row)
  {
    this._dialog.open(StockViewmoreComponent,{data:row});
  }
  onAddClick()
  {
    this._router.navigate(['/nav/stockAdd/']);
  }
}
