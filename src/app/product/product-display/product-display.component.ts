import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Product } from '../product';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ProductViewMoreComponent } from '../product-view-more/product-view-more.component';
import { AddImageComponent } from '../AddImage/add-image/add-image.component';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  displayedColumns:string[]=['product_name','product_price','Action'];
  productarr:Product[]=[];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:ProductdataService,private _dialog: MatDialog,private _router:Router) {

  this.dataSource = new MatTableDataSource();
}
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllProduct().subscribe(
      (data:any)=>{
          console.log(data);
          this.productarr=data;
          this.dataSource.data=this.productarr;
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
  onDelete(item:Product)
  {
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteProduct(item.product_id).subscribe(
        (data:any)=>{
          this.productarr.splice(this.productarr.indexOf(item),1);
          this.dataSource.data=this.productarr;
          this._router.navigate(['nav/product/']);
        }
      );
    }
  }

  onAddClick()
  {
    this._router.navigate(['/nav/productAdd/']);
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/productEdit/'+row.product_id]);
  }
  onViewMore(row)
  {
      this._dialog.open(ProductViewMoreComponent,{data:row});
  }
  onImageAdd(row)
  {
    this._router.navigate(['/nav/Add_image/'+row.product_id]);
  }
}
