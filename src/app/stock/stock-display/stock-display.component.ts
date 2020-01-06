import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StockdataService } from '../stockdata.service';
import { stock } from '../stock';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  displayedColumns:string[]=['','Action'];
  dataSource: MatTableDataSource<stock>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:StockdataService) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this._data.getAllStock();
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

  }
  onEdit(row)
  {

  }
  onViewMore(row)
  {

  }
  onAddClick()
  {

  }
}
