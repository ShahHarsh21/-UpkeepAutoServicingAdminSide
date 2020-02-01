import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../../productdata.service';
import { Router } from '@angular/router';
import { category } from 'src/app/category/category';
import { FormGroup, FormControl } from '@angular/forms';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { ColordataService } from 'src/app/color/colordata.service';
import { color_class } from 'src/app/color/color';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    addproduct:FormGroup;
    catearr:category[]=[];
    colorarr:color_class[]=[];
  constructor(private _color_data:ColordataService,private _cat_data:CategorydataService,private _data:ProductdataService,private _router:Router) { }
  ngOnInit() {
    this.addproduct=new FormGroup({

      product_id:new FormControl(null),
      product_name:new FormControl(null),
      product_description:new FormControl(null),
      fk_cat_id:new FormControl(null),
      fk_cat_name:new FormControl(),
      product_price:new FormControl(null),
      product_image:new FormControl(null),
      fk_color_name:new FormControl(null),
      fk_color_id:new FormControl(null)

    });
    this._cat_data.getAllCategory().subscribe(
      (data:category[])=>{
        this.catearr=data;
      }
    );
    this._color_data.getAllColor().subscribe(
      (data:color_class[])=>{
        this.colorarr=data;
      }
    );
   }
  onProductAdd()
  {
     console.log(this.addproduct.value.fk_color_id);
        let x=this.addproduct.value;
     this._data.addProduct(x).subscribe(
     (data:any)=>{
       console.log(data);
       this._router.navigate(['/nav/product']);
     }
   );
  }
}
