import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderDetailsmoreComponent } from '../order-details/order-detailsmore/order-detailsmore.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDetailsdataService } from '../order-details/order-detailsdata.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { order_details } from '../order-details/order_details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  displayedColoumns:string[]=['check','order_details_id','quantity','Action'];
  orderarr:order_details[]=[];
  deleteordearr:number[]=[];
  dataSource:MatTableDataSource<order_details>;
  @ViewChild(MatPaginator,{static:true}) paginator :MatPaginator;
  @ViewChild(MatSort ,{static:true}) sort: MatSort;

  constructor(private _data:OrderDetailsdataService,private _dialog:MatDialog,private _router:Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllOrder_Details().subscribe(
      (data:any)=>{
        //this.cartarr=data;
        this.dataSource.data=data;
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
  onViewMore(row)
  {
      console.log(row)
      this._dialog.open(OrderDetailsmoreComponent,{data:row});
  }
  onDeleteAll(row)
  {
     if(confirm('Are You Sure To Delete Multiple User?')){
    this._data.deleteorder_details(this.deleteordearr).subscribe(
      (data:order_details)=>{
        for(let i=0;i<this.deleteordearr.length;i++)
        {
              let x=this.orderarr.find(x => x.order_details_id == this.deleteordearr[i]);
              this.orderarr.splice(this.orderarr.indexOf(x),1);
        }
        this.dataSource.data=this.orderarr;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
   });

  }
  }
  oncheckboxchange(row:order_details)
  {
    if(this,this.orderarr.find(x => x == row.order_details_id))
    {
        this.deleteordearr.splice(this.deleteordearr.indexOf(row.order_details_id),1);
    }
    else{
      this.deleteordearr.push(row.order_details_id);
    }

  }
}
