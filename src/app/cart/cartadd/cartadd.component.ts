import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartadd',
  templateUrl: './cartadd.component.html',
  styleUrls: ['./cartadd.component.css']
})
export class CartaddComponent implements OnInit {
  addcart:FormGroup;
  invalidArrayNames:String[]=[];
  constructor(public _data:CartdataService,private _router:Router ) { }

  ngOnInit() {
    this.addcart = new FormGroup({
      cart_id:new FormControl(null),
      fk_user_id:new FormControl(null),
      fk_product_id:new FormControl(null),
      quantity:new FormControl(null)
    });
  }
  onCartAdd()
  {
    let cartobj = {
      cart_id:this.addcart.value.cart_id,
      fk_user_id:this.addcart.value.fk_user_id,
      fk_product_id:this.addcart.value.fk_product_id,
      quantity:this.addcart.value.quantity,
    };
    console.log(cartobj);
    this._data.addCart(cartobj).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['nav/cart/']);
      }
    );
  }
}
