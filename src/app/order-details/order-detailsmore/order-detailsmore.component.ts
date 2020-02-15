import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { order_details } from '../order_details';

@Component({
  selector: 'app-order-detailsmore',
  templateUrl: './order-detailsmore.component.html',
  styleUrls: ['./order-detailsmore.component.css']
})
export class OrderDetailsmoreComponent implements OnInit {
  order_details_id: number;
  fk_order_id: number;
  fk_product_id: number;
  quantity:number;

  constructor(public dialogref:MatDialogRef <OrderDetailsmoreComponent>, @Inject(MAT_DIALOG_DATA) public data:order_details) { }

  ngOnInit() {
    this.order_details_id=this.data.order_details_id;
    this.fk_order_id=this.data.fk_order_id;
    this.fk_product_id=this.data.fk_product_id;
    this.quantity=this.data.quantity;

  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
