import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user } from '../user';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { userSerivce_class } from 'src/app/class/userService_class';

@Component({
  selector: 'app-user-view-more',
  templateUrl: './user-view-more.component.html',
  styleUrls: ['./user-view-more.component.css']
})
export class UserViewMoreComponent implements OnInit {
  user_id :number=0;
  userArr: userSerivce_class[]=[];
  user_name :string ='';
  email_id : string ='';
  mobile_no :string = '';
  address : string ='';
  date_of_birth :string = '';
  VehiclesArr :any[] =[];
  statusArr :string []=[];
  constructor(public _Act_routs :ActivatedRoute,public _userData:UserdataService,public _router:Router) { }

  ngOnInit() {
    this.user_id=this._Act_routs.snapshot.params['user_id'];
    console.log(this.user_id);
    this._userData.getUserById(this.user_id).subscribe(
      (userData:any)=>{
        this.userArr=userData;
        this.dataAssign(userData[0]);
        this._userData.getAllUSerWithService(this.user_id).subscribe(
          (vehicleData : any[])=>{
            this.VehiclesArr=vehicleData;
          }
        );
      }
    );
  }
  dataAssign(data)
  {
    this.email_id=data.email_id;
    this.user_name=data.user_name;
    this.mobile_no=data.mobile_no;
    this.address=data.address;
    this.date_of_birth=data.date_of_birth;
    // this.vehicle_no=data.vehicle_no;
    // thi.status=data.status;
    this.VehiclesArr.push();
  }
  onClose()
  {
    this._router.navigate(['/nav/user']);
  }
}
