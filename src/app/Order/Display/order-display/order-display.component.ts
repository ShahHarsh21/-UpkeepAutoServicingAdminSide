import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/Cart/Cart';
import { Order } from '../../order';
import { OrderDataService } from '../order-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','order_date','order_amount','order_payment','Action'];
  // productarr:Product[]=[];
  deleteproarr:number[]=[];
  product_img : string[]=[];
  dataSource: MatTableDataSource<Order>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public _orderData : OrderDataService,public _router : Router) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {

    this.dataSource.paginator=this.paginator;

    this._orderData.getAllOrder().subscribe(
      (orderData : any[])=>{
        this.dataSource.data = orderData;
        console.log(orderData);
      }
    );
  }

  applyFilter(value)
  {

  }

  onAddClick()
  {

  }

  oncheckboxchange(row)
  {

  }

  onDelete(row)
  {

  }

  onEdit(row)
  {
    this._router.navigate(['/nav/OrderEdit/'+row.order_id]);
  }

  onViewMore(row)
  {
    this._router.navigate(['/nav/OrderDetails/']);
  }

  onImageAdd(row)
  {

  }

  onDeleteAll()
  {

  }
}
