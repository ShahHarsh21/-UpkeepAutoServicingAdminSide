import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderDetailsmoreComponent } from '../order-details/order-detailsmore/order-detailsmore.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDetailsdataService } from '../order-details/order-detailsdata.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { order_details } from '../order-details/order_details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
