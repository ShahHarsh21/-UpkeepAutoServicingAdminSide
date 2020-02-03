import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';
import { ColordataService } from 'src/app/color/colordata.service';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { color_class } from 'src/app/color/color';
import { category } from 'src/app/category/category';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editProduct:FormGroup;
  pro_arr : Product[] = [];
  color_arr:color_class[]=[];
  cate_arr:category[]=[];
  constructor(private _productdata : ProductdataService,private _colordata:ColordataService,private _catedata:CategorydataService,private _router:Router,private _act_routs:ActivatedRoute) {

    this._act_routs=this._act_routs.snapshot.params['product_id'];
      console.log( this._act_routs);
    this.editProduct=new FormGroup({
      product_id : new FormControl(null),
      product_name : new FormControl(null),
      product_description:new FormControl(null),
      fk_cat_id : new FormControl(null),
      fk_cat_name:new FormControl(null),
      product_price : new FormControl(null),
      product_image : new FormControl(),
      product_color : new FormControl(null),
      fk_color_id : new FormControl(null),
      fk_color_name:new FormControl(null)}
    );
  }
  ngOnInit()
  {
    this._productdata.getProductById(this._act_routs).subscribe(
      (data:any)=>{
        console.log(data);
        this.formDataBind(data[0]);
      }
    );
      this._catedata.getAllCategory().subscribe(
        (data: category[])=>{
          console.log(data);
          this.cate_arr=data;
        }
      );
      this._colordata.getAllColor().subscribe(
        (data:color_class[])=>{
          console.log(data);
          this.color_arr=data;
        }
      );
  }
    formDataBind(item:Product)
    {
      this.editProduct.patchValue({
        product_id : item.product_id,
        product_name : item.product_name,
        product_description:item.product_description,
        fk_cat_id : item.fk_cat_id,
        fk_cat_name:this.cate_arr.indexOf(this.editProduct.value.fk_cat_id),
        product_price : item.product_price,
        product_image : item.product_image,
        fk_color_id : item.fk_color_id,
        fk_color_name : this.color_arr.indexOf(this.editProduct.value.fk_color_id)
        });

    }
  onProductEdit()
  {
    console.log(this.editProduct.value.fk_cat_id);
    console.log(this.editProduct.value.fk_color_id);
    let productObj={
      product_id : this.editProduct.value.product_id,
      product_name : this.editProduct.value.product_name,
      product_description:this.editProduct.value.product_description,
      fk_cat_id : this.editProduct.value.fk_cat_id,
      product_price : this.editProduct.value.product_price,
      product_image : this.editProduct.value.product_image,
      fk_color_id : this.editProduct.value.fk_color_id,
    };

    this._productdata.updateProduct(productObj.product_id,productObj).subscribe(
     (data)=>{
        console.log(data);
        this._router.navigate(['/nav/product/']);
      }
    );
  }
}
