import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StockdataService } from '../Stockdata.service';
import { stock } from '../stock';
import { Router } from '@angular/router';
import { StockViewmoreComponent } from '../stockViewMore/stock-viewmore/stock-viewmore.component';
// import { Product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
// import { ProductViewMoreComponent } from 'src/app/product/product-view-more/product-view-more.component';
import { Product_stock } from 'src/app/class/product_stock';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  stockarr:Product_stock[]=[];
  deletestockarr:number[]=[];
  product_img :string[]=[];
  quantity :string []=[];
  str : string  = environment.url + 'public/Images/Product_image/';
  displayedColumns:string[]=['check','Image','product_name','product_price','quantity','Action'];
  dataSource: MatTableDataSource<Product_stock>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _data:StockdataService,public _router:Router,private _productData : ProductdataService) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
      this._data.getAllQuanitity().subscribe(
        (data:Product_stock[]) => {
          this.stockarr=data;
          this.dataSource.data  = this.stockarr;
          console.log(data);
          for (let index = 0; index < data.length; index++)
          {
            this.dataSource.data[index].product_img = environment.url + "Images/Product_image/" + data[index].product_img;
          }
        }
      );

        // this._productData.getAllImage().subscribe(
        //   (imageData :any)=>{
        //     for (let index = 0; index < imageData.length; index++)
        //     {
        //       this.product_img[index] = "http://localhost:3000/Images/Product_image/" + imageData[index];
        //     }
        //     console.log(this.product_img);
        //   }
        // );
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
    console.log(row);
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
  oncheckboxchange(row:Product_stock)
  {
    // if(this,this.stockarr.find(x => x == row.stock_id))
    // {
    //     this.deletestockarr.splice(this.deletestockarr.indexOf(row.stock_id),1);
    // }
    // else
    // {
    //   this.deletestockarr.push(row.stock_id);
    // }
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteAllStock(this.deletestockarr).subscribe(
      (data:Product_stock)=>{
        for(let i=0;i<this.deletestockarr.length;i++)
        {
              console.log(data);
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
    this._router.navigate(['/nav/stockViewmore/'+row.stock_id]);
  }
  onAddClick()
  {
    this._router.navigate(['/nav/stockAdd/']);
  }
}
