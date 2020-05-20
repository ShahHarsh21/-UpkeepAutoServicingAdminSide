import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockdataService } from '../../Stockdata.service';
import { stock } from '../../stock';
import { Product_stock } from 'src/app/class/product_stock';
import { ProductdataService } from 'src/app/product/productdata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  editStock:FormGroup;
  product_image : string;
  constructor(public _productData : ProductdataService,public _data:StockdataService,public _routs:Router,public _act_routs:ActivatedRoute) { }

  ngOnInit() {
    this._act_routs=this._act_routs.snapshot.params['stock_id'];
      console.log( this._act_routs);
    this.editStock=new FormGroup({
      stock_id: new FormControl(null),
      fk_product_id : new FormControl(null),
      fk_supplier_id : new FormControl(null),
      Supplier_name : new FormControl(null),
      product_name : new FormControl(null),
      product_price : new FormControl(null),
      product_image : new FormControl(null),
      category_name : new FormControl(null),
      quantity:new FormControl(null),
      product_id : new FormControl(null)
    }

    );
      this._data.getStockById(this._act_routs).subscribe(
        (data:any)=>{
          console.log(data);
          this.formDataBind(data[0]);

          console.log(this.editStock.value.product_id);
          this._productData.getImageById(this.editStock.value.product_id).subscribe(
            (img : any)=>{
              console.log(img);
              this.product_image = environment.url + 'Images/WorkerImages/' + img[0];
              console.log(this.product_image);
            }
          );
        }
      );
  }
  formDataBind(item:Product_stock)
    {
      console.log(item);
      this.editStock.patchValue({
        stock_id: item.stock_id,
        fk_product_id : item.fk_product_id,
        fk_supplier_id :item.fk_supplier_id,
        Supplier_name : item.supplier_name,
        product_name : item.product_name,
        product_price :item.product_price,
        quantity:item.quantity,
        category_name : item.category_name,
        product_id : item.product_id
      });
    }
  onStockEdit()
  {
    console.log(this.editStock.value);
    this._data.updateStock(this.editStock.value.stock_id,this.editStock.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['/nav/stock']);
      }
    );
  }
  onCancle()
  {
    this._routs.navigate(['/nav/stock']);
  }
}
