import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cart } from '../cart';

@Component({
  selector: 'app-cartviewmore',
  templateUrl: './cartviewmore.component.html',
  styleUrls: ['./cartviewmore.component.css']
})
export class CartviewmoreComponent implements OnInit {
  cart_id: number;
  fk_user_id: number;
  fk_product_id: number;
  quantity:number;

  constructor(public dialogref:MatDialogRef<CartviewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data:cart) { }

  ngOnInit() {
    this.cart_id=this.data.cart_id;
    this.fk_user_id=this.data.fk_user_id;
    this.fk_product_id=this.data.fk_product_id;
    this.quantity=this.data.quantity;

  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
