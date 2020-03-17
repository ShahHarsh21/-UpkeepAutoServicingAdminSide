import { Component, OnInit, Inject } from '@angular/core';
import { ServiceDataService } from '../../service-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service_class } from '../../service_class';
import { UserdataService } from 'src/app/user/userdata.service';
import { user } from 'src/app/user/user';
import { userSerivce_class } from 'src/app/class/userService_class';

@Component({
  selector: 'app-service-viewmore',
  templateUrl: './service-viewmore.component.html',
  styleUrls: ['./service-viewmore.component.css']
})
export class ServiceViewmoreComponent implements OnInit {
    public service_id :number;
    public arr:userSerivce_class[]=[];
    public user_id:number=0;
  constructor(public _ServiceData:ServiceDataService,private _userdata:UserdataService,public _act_routs:ActivatedRoute,public _router:Router) { }

  ngOnInit() {
    this.service_id=this._act_routs.snapshot.params['service_id'];
    console.log(this.service_id);
    this._ServiceData.getUserServiceByUserId(this.service_id).subscribe(
      (serviceData:any[])=>{
        this.arr=serviceData;
      }
    );
  }
  onClose()
  {
    this._router.navigate(['/nav/service']);
  }
}
