import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
import { category } from 'src/app/category/category';
import { FormGroup, FormControl } from '@angular/forms';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddImageComponent } from '../AddImage/add-image/add-image.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    addproduct:FormGroup;
    catearr:category[]=[];
  constructor(private _cat_data:CategorydataService,private _data:ProductdataService,private _router:Router,public _dialog:MatDialog) { }
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
        console.log(data);
        this.catearr=data;
      }
    );
   }
   onProductAdd()
<<<<<<< HEAD
   {

   }
  onCancle()
=======
>>>>>>> 10ddfeca22dc1bece095c935a59854d63da9a93c
  {
    let productobj = {
      product_id: this.addproduct.value.email_id,
      product_name: this.addproduct.value.password_group.user_password,
      product_description: this.addproduct.value.user_type,
      fk_cat_id: this.addproduct.value.user_name,
      fk_cat_name: this.addproduct.value.address,
      product_price: this.addproduct.value.mobile_no,
      product_image:this.addproduct.value.dob,
      fk_color_id:this.addproduct.value.fk_color_id,
      fk_color_name:this.addproduct.value.fk_color_name
    };
    this._data.addProduct(productobj).subscribe(
      (data:any)=>{
        this._router.navigate(['nav/product/']);
      }
    );
  // onCancle()
  // {
  //   this._router.navigate(['/nav/product/']);
  // }
  // onImageAdd()
  // {
  //   this._dialog.open(AddImageComponent);
  // }
}
}
