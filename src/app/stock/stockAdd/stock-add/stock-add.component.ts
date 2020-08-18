import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { category } from 'src/app/category/category';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { ProductdataService } from 'src/app/product/productdata.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {
    addStock:FormGroup;
    catearr:category[]=[];
  constructor(private _cat_data:CategorydataService,private _data:ProductdataService,private _router:Router,public _dialog:MatDialog) { }

  ngOnInit() {
    this._cat_data.getAllCategory().subscribe(
      (data:category[])=>{
        console.log(data);
        this.catearr=data;
      }
    );
  }

 onProductAdd()
 {
    let stockobj = {
    product_id: this.addStock.value.email_id,
    product_name: this.addStock.value.password_group.user_password,
    product_description: this.addStock.value.user_type,
    fk_cat_id: this.addStock.value.user_name,
    fk_cat_name: this.addStock.value.address,
    product_price: this.addStock.value.mobile_no,
    product_image:this.addStock.value.dob,
    fk_color_id:this.addStock.value.fk_color_id,
    fk_color_name:this.addStock.value.fk_color_name
    };

       this._data.addProduct(stockobj).subscribe(
           (data:any)=>{
            this._router.navigate(['nav/product/']);
         }
  );
}
onCancle()
{
  this._router.navigate(['/nav/product/']);
}
// onImageAdd()
// {
//   this._dialog.open(AddImageComponent);
// }

}
