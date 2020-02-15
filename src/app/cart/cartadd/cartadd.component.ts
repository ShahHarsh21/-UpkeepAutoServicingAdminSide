import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';
import { cart } from '../cart';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cartadd',
  templateUrl: './cartadd.component.html',
  styleUrls: ['./cartadd.component.css']
})
export class CartaddComponent implements OnInit {
  addcart:FormGroup;
  invalidArrayNames:String[]=[];
  constructor(public _data:CartdataService,private _router:Router) { }

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
    this._data.addCart(this.addcart.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/cart/']);
      }
    );
  }
  onClickCancel()
  {
    this._router.navigate(['/nav/cart/']);
  }
}
