import { Component, OnInit } from '@angular/core';
import { ProductdataService } from 'src/app/product/productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product';
import { environment } from 'src/environments/environment';
import { ProductViewMoreComponent } from 'src/app/product/product-view-more/product-view-more.component';

@Component({
  selector: 'app-category-viewmore',
  templateUrl: './category-viewmore.component.html',
  styleUrls: ['./category-viewmore.component.css']
})
export class CategoryViewmoreComponent implements OnInit {

  constructor(public _productData :ProductdataService,public _act_routs : ActivatedRoute,public _routs : Router) { }
  cat_id :number = 0;
  product_img : string ='';
  Img :string[]=[];
  displayedColumns :string [] = ['product_name','product_price','product_description','product_image','product_color'];
  productArr : Product[]=[];
  ngOnInit() {
    this.cat_id = this._act_routs.snapshot.params['category_id'];
    console.log(this.cat_id);
    this._productData.getAllProductByCategory(this.cat_id).subscribe(
      (productData : any[])=>{
        this.productArr = productData;
        console.log(productData[0].product_img);
      }
    );
  }
  onClose()
  {
    this._routs.navigate(['/nav/category/']);
  }
}
