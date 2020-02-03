import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CartdataService } from '../cartdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { cart } from '../cart';

@Component({
  selector: 'app-cartedit',
  templateUrl: './cartedit.component.html',
  styleUrls: ['./cartedit.component.css']
})
export class CarteditComponent implements OnInit {
  editcart:FormGroup;
  constructor(private _data:CartdataService,private _router:Router,private _act_routs:ActivatedRoute) {
    this._act_routs=this._act_routs.snapshot.params['user_id'];
      console.log( this._act_routs);
    this.editcart=new FormGroup({
      cart_id : new FormControl(null),
      fk_user_id : new FormControl(null),
      fk_product_id : new FormControl(null),
      quantity:new FormControl(null)},
    );
  }
  ngOnInit() {
    this._data.getCartById().subscribe(
      (data:any)=>{
        console.log(data);
        this.formDataBind(data[0]);
      }
    );
 }
 formDataBind(item:cart)
 {
   this.editcart.patchValue({
     cart_id : item.cart_id,
     fk_user_id : item.fk_user_id,
     fk_product_id:item.fk_product_id,
     quantity : item.quantity,
   });
}
oncartEdit()
{
  console.log(this.editcart.value)
  this._data.updateCart(this.editcart.value).subscribe(
    (data)=>{
      console.log(data);
      this._router.navigate(['/nav/cart/']);
    }
  );
}
}
