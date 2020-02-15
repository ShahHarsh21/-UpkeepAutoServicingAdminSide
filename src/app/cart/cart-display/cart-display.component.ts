import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';
import { CartviewmoreComponent } from '../cartviewmore/cartviewmore.component';
import { cart } from '../cart';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {
displayedColumns:string[]=['check','cart_id','quantity','Action'];
cartarr:cart[]=[];
deletecartarr:number[]=[];
dataSource: MatTableDataSource<cart>;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:CartdataService,private _dialog:MatDialog,private _router:Router) {
    //this.dataSource.paginator=this.paginator;
    this.dataSource= new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllCart().subscribe(
      (data:any)=>{
        this.cartarr=data;
        this.dataSource.data=this.cartarr;
      }
    );
  }
  applyFilter(filtervalue:string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onchecheckboxchange(row:cart)
  {
    if(this,this.cartarr.find(x => x == row.cart_id))
    {
        this.deletecartarr.splice(this.deletecartarr.indexOf(row.cart_id),1);
    }
    else{
      this.deletecartarr.push(row.cart_id);
    }
  }
  onDeleteAll(row)
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._data.DeleteAllCart(this.deletecartarr).subscribe(
        (data:cart)=>{
          for(let i=0;i<this.deletecartarr.length;i++)
          {
                let x=this.cartarr.find(x => x.cart_id == this.deletecartarr[i]);
                this.cartarr.splice(this.cartarr.indexOf(x),1);
          }
          this.dataSource.data=this.cartarr;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
  }
}
  onDelete(row)
  {
    let x:number= this.cartarr.indexOf(row);
    if(confirm(" R U SURE ?"))
    {
      this._data.deleteCart(row.cart_id).subscribe(
        (data:any)=>{
            this.cartarr.splice(this.cartarr.indexOf(row),1);
            this.dataSource.data=this.cartarr;
            this._router.navigate(['nav/cart/'])
        }
      );
    }
  }
  onEdit(row)
  {
      this._router.navigate(['/nav/cartEdit/'+row.cart_id]);
  }
  onViewMore(row)
  {
      this._dialog.open(CartviewmoreComponent,{data:row});
  }
  onAddClick()
  {
      this._router.navigate(['nav/cartAdd/']);
  }
}
