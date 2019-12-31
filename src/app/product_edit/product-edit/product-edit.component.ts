import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import {category}from '../../category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // addProduct:FormGroup;
  pro_arr : Product[] = [];
  product_re:Product;
  product_id : number;
  product_name : string;
  product_description : string;
  fk_cat_id : number;
  product_price : string;
  product_image : string;
  product_color : string;
  fk_color_id : number;
  constructor(private _productdata : ProductdataService,private _router:Router,private _act_routs:ActivatedRoute) { }
  ngOnInit()
  {
    this.product_id=this._act_routs.snapshot.params['product_id'];
    console.log(this.product_id);
    this._productdata.getAllProduct().subscribe(
      (data: any ) => {
        console.log(data);
      }
    );
    this._productdata.getProductById(this.product_id).subscribe(
      (data:any)=>{
        // console.log(data);
        // console.log(this.product_id=data[0].product_id);
        // console.log(this.product_name=data[0].product_name);
        // console.log(this.product_description=data[0].product_description);
        // console.log(this.fk_cat_id=data[0].fk_cat_id);
        // console.log(this.product_price=data[0].product_price);
        // console.log(this.product_image=data[0].product_image);
        // console.log(this.product_color=data[0].product_color);
        // console.log(this.fk_color_id=data[0].fk_color_id);

        this.product_id=data[0].product_id;
        this.product_name=data[0].product_name;
        this.product_description=data[0].product_description;
        this.fk_cat_id=data[0].fk_cat_id;
        this.product_price=data[0].product_price;
        this.product_image=data[0].product_image;
        this.product_color=data[0].product_color;
        this.fk_color_id=data[0].fk_color_id;
      }
    );

    // this.addProduct=new FormGroup({
    //   product_id:new FormControl(null),
    //   product_name:new FormControl(null),
    //   product_description : new FormControl(null),
    //   fk_cat_id : new FormControl(null),
    //   product_price : new FormControl(null),
    //   product_image : new FormControl(null),
    //   product_color : new FormControl(null),
    //   fk_color_id : new FormControl(null),
    // });
  }
  onProductEdit(item:Product[])
  {
      this._productdata.updateProduct(this.product_id,new Product(this.product_id,this.product_name,this.product_description,this.fk_cat_id,this.product_price,this.product_image,this.product_color,this.fk_color_id)).subscribe(
        (data:any)=>{
          console.log(data);
          this._router.navigate(['product']);
        }
      );
  }
}
