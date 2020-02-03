import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
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
  displayedColumns:string[]=['quantity','Action'];
  dataSource: MatTableDataSource<stock>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:StockdataService,public _router:Router,private _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
      this._data.getAllStock().subscribe(
        (data:stock[]) => {
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
    if(confirm("ARE YOU SURE , YOU WANT TO DELETE?"))
    {
      this._data.deleteStock(row.stock_id).subscribe(
        (data:any)=>{
          console.log(data);
          this._router.navigate(['/nav/stock']);
        }
      );
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
