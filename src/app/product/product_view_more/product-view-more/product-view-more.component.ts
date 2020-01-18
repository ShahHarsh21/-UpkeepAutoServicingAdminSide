import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../product';

@Component({
  selector: 'app-product-view-more',
  templateUrl: './product-view-more.component.html',
  styleUrls: ['./product-view-more.component.css']
})
export class ProductViewMoreComponent implements OnInit {
    product_id : number = 0;
    product_name : string = '';
    product_description : string = '';
    product_price : string = '';
    product_image : string = '';
    product_color : string = '';


  constructor(public dialogref: MatDialogRef<ProductViewMoreComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit() {
    this.product_id = this.data.product_id;
    this.product_name = this.data.product_name;
    this.product_color = this.data.product_color;
    this.product_price = this.data.product_price;
    this.product_description = this.data.product_description;
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
