import { Component, OnInit, Inject } from '@angular/core';
import { category } from 'src/app/category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { StockdataService } from '../../Stockdata.service';
import { ProductdataService } from 'src/app/product/productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { stock } from '../../stock';
import { Product } from 'src/app/product/product';
import { Product_stock } from 'src/app/class/product_stock';
import { SupplierdataService } from 'src/app/supplier/supplierdata.service';

@Component({
  selector: 'app-stock-viewmore',
  templateUrl: './stock-viewmore.component.html',
  styleUrls: ['./stock-viewmore.component.css']
})
export class StockViewmoreComponent implements OnInit {

  public stock_id : number = 0;
  public DataArr : any[] = [];
  public fk_cat_id:number=0;
  public supplier_id: any;
  public supplierData : any[] = [];

  constructor(public _router : Router,public _SupplierData : SupplierdataService,public _stockData :StockdataService,public _pro_data:ProductdataService,public _Cat_data:CategorydataService,public _act_routs : ActivatedRoute) { }

   ngOnInit() {

    this.stock_id = this._act_routs.snapshot.params['stock_id'];

    this._stockData.getStockById(this.stock_id).subscribe(
      (stockData : Product_stock[])=>{
        // console.log(stockData);
        this.DataArr = stockData;
      }
    );
  }
  onClickBack()
  {
    this._router.navigate(['/nav/stock/']);
  }
}
