import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product';
import { category } from 'src/app/category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { environment } from 'src/environments/environment';
import { ProductdataService } from '../productdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view-more',
  templateUrl: './product-view-more.component.html',
  styleUrls: ['./product-view-more.component.css']
})
export class ProductViewMoreComponent implements OnInit {
    cate_arr:category[]=[];
    product_id : number = 0;
    product_name : string = '';
    product_description : string = '';
    product_price : string = '';
    product_image : string = '';
    fk_color_name : string = '';
    fk_color_id:number=0;
    fk_cate_name:string='';
    fk_cat_id:number=0;
    ProductImage :string = ' ';
    constructor(private _catedata:CategorydataService,public _productData : ProductdataService,public _Act_routs:ActivatedRoute,public _routs : Router) { }

  ngOnInit() {
    this.product_id = this._Act_routs.snapshot.params['product_id'];
    this._productData.getProductById(this.product_id).subscribe(
      (productData : any[])=>{
        console.log(productData);
        this.product_name = productData[0].product_name;
        this.product_price = productData[0].product_price;
        this.product_image=productData[0].product_image;
        this.product_description = productData[0].product_description;
        this.fk_cat_id=productData[0].fk_cat_id;
        this.fk_color_id=productData[0].fk_color_id;
        this.ProductImage = environment.url+ 'images/Product_image/' +productData[0].product_image;
      }
    );

    console.log(this.fk_cat_id);
    this._catedata.getCategoryById(this.fk_cat_id).subscribe(
      (data:category)=>{
        console.log(data);
        this.fk_cate_name=data[0].category_name;
        console.log(this.fk_cate_name);
      }
    );
  }
  onClose()
  {
    this._routs.navigate(['/nav/product/']);
  }
}
