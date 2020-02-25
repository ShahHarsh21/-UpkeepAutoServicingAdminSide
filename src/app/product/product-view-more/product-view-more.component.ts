import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product';
import { category } from 'src/app/category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { environment } from 'src/environments/environment';

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
    constructor(private _catedata:CategorydataService,public dialogref: MatDialogRef<ProductViewMoreComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit() {
    this.product_id = this.data.product_id;
    this.product_name = this.data.product_name;
    this.product_price = this.data.product_price;
    this.product_image=this.data.product_image;
    this.product_description = this.data.product_description;
    this.fk_cat_id=this.data.fk_cat_id;
    this.fk_color_id=this.data.fk_color_id;

    console.log(this.fk_cat_id);
    this._catedata.getCategoryById(this.fk_cat_id).subscribe(
      (data:category)=>{
        console.log(data);
        this.fk_cate_name=data[0].category_name;
        console.log(this.fk_cate_name);
      }
    );
    this.ProductImage = environment.url+ 'images/Product_image/' +this.data.product_image;
  }

}
