import { Component, OnInit, Inject } from '@angular/core';
import { category } from 'src/app/category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { StockdataService } from '../../Stockdata.service';
import { ProductdataService } from 'src/app/product/productdata.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { stock } from '../../stock';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-stock-viewmore',
  templateUrl: './stock-viewmore.component.html',
  styleUrls: ['./stock-viewmore.component.css']
})
export class StockViewmoreComponent implements OnInit {
  public product_id:number;
  public product_name: string;
  public product_price: string;
  public product_image: string;
  public product_description:string;
  public fk_product_id:number=0;
  public stock_id:number=0;
  public quantity:number;
  public category_name:string='';
  tmp_stock_id:number=0;
  public fk_cat_id:number=0;
  constructor(public _pro_data:ProductdataService,public _Cat_data:CategorydataService,public dialogref: MatDialogRef<StockViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: stock) { }

   ngOnInit() {
    this.stock_id=this.data.stock_id;
    this.quantity=this.data.quantity;
    this.fk_product_id=this.data.fk_product_id;
    console.log(this.fk_product_id)
    this._pro_data.getProductById(this.fk_product_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.product_name=data[0].product_name;
        this.product_price=data[0].product_price;
        this.product_description=data[0].product_description;
        this.product_image=data[0].product_image;
        console.log(data[0].fk_cat_id);
        this._Cat_data.getCategoryById(data[0].fk_cat_id).subscribe(
          (data:any)=>{
            console.log(data);
            this.category_name=data[0].category_name;
          }
        );
      }
    );
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
