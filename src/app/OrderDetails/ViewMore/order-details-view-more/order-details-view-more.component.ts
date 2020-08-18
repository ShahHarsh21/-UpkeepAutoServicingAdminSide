import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsdataService } from 'src/app/order-details/order-detailsdata.service';
import { order_details } from 'src/app/order-details/order_details';

@Component({
  selector: 'app-order-details-view-more',
  templateUrl: './order-details-view-more.component.html',
  styleUrls: ['./order-details-view-more.component.css']
})
export class OrderDetailsViewMoreComponent implements OnInit {

  VehiclesArr : any[]=[
    'vehicle_no',
    'status'
  ];
  user_name :string;
  email_id : string;
  mobile_no :string;
  address : string;
  date_of_birth : string;
  order_id :number;
  orderarr:order_details[]=[];
  deleteordearr:number[]=[];

  constructor(private _data:OrderDetailsdataService,private _router:Router,private _act_routs : ActivatedRoute) { }

  ngOnInit(): void {
    this.order_id = this._act_routs.snapshot.params['order_id']
    this._data.getAllOrder_DetailsById(this.order_id).subscribe(
      (X:any)=>{
        console.log(X);
      }
    );
  }

  onClose()
  {
    this._router.navigate(['/nav/']);
  }
}
