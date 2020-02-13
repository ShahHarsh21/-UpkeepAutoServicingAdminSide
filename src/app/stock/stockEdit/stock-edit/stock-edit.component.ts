import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockdataService } from '../../Stockdata.service';
import { stock } from '../../stock';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  editStock:FormGroup;
  constructor(public _data:StockdataService,public _routs:Router,public _act_routs:ActivatedRoute) { }

  ngOnInit() {
    this._act_routs=this._act_routs.snapshot.params['stock_id'];
      console.log( this._act_routs);
    this.editStock=new FormGroup({
      stock_id: new FormControl(null),
      fk_supplier_id : new FormControl(null),
      fk_color_id :new FormControl(null),
      fk_product_id : new FormControl(null),
      quantity:new FormControl(null)}
    );
      this._data.getStockById(this._act_routs).subscribe(
        (data:any)=>{
          console.log(data);
          this.formDataBind(data[0]);
        }
      );
  }
  formDataBind(item:stock)
    {
      console.log(item);
      this.editStock.patchValue({
        stock_id: item.stock_id,
      fk_supplier_id : item.fk_supplier_id,
      fk_color_id : item.fk_color_id,
      fk_product_id : item.fk_product_id,
      quantity:item.quantity
      });
    }
  onStockEdit()
  {
    console.log(this.editStock.value);
    this._data.updateStock(this.editStock.value.stock_id,this.editStock.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['/nav/stock']);
      }
    );
  }
  onCancle()
  {
    this._routs.navigate(['/nav/stock']);
  }
}
