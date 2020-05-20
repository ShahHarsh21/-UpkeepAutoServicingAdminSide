import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductViewMoreComponent } from '../product-view-more/product-view-more.component';
import { AddImageComponent } from '../AddImage/add-image/add-image.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','product_name','product_price','Action'];
  productarr:Product[]=[];
  deleteproarr:number[]=[];
  product_img : any[]=[];
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

    this._data.getAllImage().subscribe(
      (image : string[])=>{
        console.log(environment.url + 'public/Images/Product_image/'+image);
        // this.product_img = environment.url + 'public/Images/Product_image/' + image;
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
    console.log(row.product_id);
    this._router.navigate(['/nav/productViewmore/'+row.product_id]);
  }
  onImageAdd(row)
  {
    this._router.navigate(['/nav/Add_image/'+row.product_id]);
  }
  oncheckboxchange(row:Product)
  {
    if(this,this.productarr.find(x => x == row.product_id))
    {
        this.deleteproarr.splice(this.deleteproarr.indexOf(row.product_id),1);
    }
    else{
      this.deleteproarr.push(row.product_id);
    }
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteallPro(this.deleteproarr).subscribe(
      (data:Product)=>{
        for(let i=0;i<this.deleteproarr.length;i++)
        {
              let x=this.productarr.find(x => x.product_id == this.deleteproarr[i]);
              this.productarr.splice(this.productarr.indexOf(x),1);
        }
        this.dataSource.data=this.productarr;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
   });
  }
  }
}
