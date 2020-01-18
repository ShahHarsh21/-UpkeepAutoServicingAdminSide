import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../../productdata.service';
import { Router } from '@angular/router';
import { category } from 'src/app/category/category';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    addproduct:FormGroup;
  constructor(private _data:ProductdataService,private _router:Router) { }
  ngOnInit() {
    this.addproduct=new FormGroup({

      product_id:new FormControl(null),
      product_name:new FormControl(null),
      product_description:new FormControl(null),
      fk_cat_id:new FormControl(null),
      product_price:new FormControl(null),
      product_image:new FormControl(null),
      product_color:new FormControl(null),
      fk_color_id:new FormControl(null)

    });
   }
  onProductAdd()
  {
    let item=this.addproduct.value;
    // console.log(item);
    this._data.addProduct(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['product']);
      }
    );
  }
}
