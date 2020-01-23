import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editProduct:FormGroup;
  pro_arr : Product[] = [];
  constructor(private _productdata : ProductdataService,private _router:Router,private _act_routs:ActivatedRoute) {

    this._act_routs=this._act_routs.snapshot.params['product_id'];
      console.log( this._act_routs);


    this.editProduct=new FormGroup({
      product_id : new FormControl(null),
      product_name : new FormControl(null),
      fk_cat_id : new FormControl(null),
      product_price : new FormControl(null),
      product_image : new FormControl(),
      product_color : new FormControl(null),
      fk_color_id : new FormControl(null)}
    );
  }
  ngOnInit()
  {
    this._productdata.getProductById(this._act_routs).subscribe(
      (Data:any)=>{
        console.log(Data);
      }
    );
  }
    formDataBind(item:Product)
    {
      this.editProduct.patchValue({
        product_id : item.product_id,
      product_name : item.product_name,
      fk_cat_id : item.fk_cat_id,
      product_price : item.product_price,
      product_image : item.product_image,
      product_color : item.product_color,
      fk_color_id : item.fk_color_id
      });
    }
  onProductEdit(item:Product)
  {
      this._productdata.updateProduct(item.product_id,item).subscribe(
        (data:any)=>{
          console.log(data);
          this._router.navigate(['/nav/Product']);
        }
      );
  }
}
