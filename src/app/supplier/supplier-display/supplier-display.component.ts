import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { supplier } from '../supplier';
import { SupplierdataService } from '../supplierdata.service';


@Component({
  selector: 'app-supplier-display',
  templateUrl: './supplier-display.component.html',
  styleUrls: ['./supplier-display.component.css']
})
export class SupplierDisplayComponent implements OnInit {
  displayedColumns:string[]=['supplier_id','fk_user_id','Action'];
  supplierarr:supplier[]=[];
  dataSource: MatTableDataSource<supplier>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:SupplierdataService) {
    this.dataSource=new MatTableDataSource()
  }

  ngOnInit() {
    this._data.getAllSupplier().subscribe(
      (data:any)=>{
        // console.log(data);
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
