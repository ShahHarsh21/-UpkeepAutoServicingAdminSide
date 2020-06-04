import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { supplier } from '../supplier';
import { SupplierdataService } from '../supplierdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplier-display',
  templateUrl: './supplier-display.component.html',
  styleUrls: ['./supplier-display.component.css']
})
export class SupplierDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','firm_name','supplier_name','contact_no','firm_address','Action'];
  supplierarr:supplier[]=[];
  deleteSupplierarr : number [] = [];
  dataSource: MatTableDataSource<supplier>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:SupplierdataService,public _router : Router) {
    this.dataSource=new MatTableDataSource()
  }

  ngOnInit() {
    this._data.getAllSupplier().subscribe(
      (data:any)=>{
        console.log(data);
        this.supplierarr = data ;
        this.dataSource.data = this.supplierarr ;
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
    let x:number = this.supplierarr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteSupplier(row.user_id).subscribe(
        (data:any)=>{
          this.supplierarr.splice(this.supplierarr.indexOf(row),1);
          this.dataSource.data=this.supplierarr;
          this._router.navigate(['nav/supplier/']);
        }
      );
    }
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/supplierEdit/'+row.supplier_id]);
  }
  onAddClick()
  {
    this._router.navigate(['/nav/supplierAdd/']);
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._data.DeleteAllSupplier(this.deleteSupplierarr).subscribe(
        (data:supplier)=>{
          for(let i=0;i<this.deleteSupplierarr.length;i++)
          {
                let x=this.supplierarr.find(x => x.supplier_id == this.deleteSupplierarr[i]);
                this.supplierarr.splice(this.supplierarr.indexOf(x),1);
          }
          this.dataSource.data=this.supplierarr;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
    }
  }

  onViewMore(row)
  {
    console.log(row.supplier_id);
    this._router.navigate(['/nav/supplier_viewmore/'+row.supplier_id]);
  }
}
