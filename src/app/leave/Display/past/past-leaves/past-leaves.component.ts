import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from 'src/app/leave/leave-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-past-leaves',
  templateUrl: './past-leaves.component.html',
  styleUrls: ['./past-leaves.component.css']
})
export class PastLeavesComponent implements OnInit {
  leave_id : number;
  public leaveStartDate : string;
  public leaveEndDate : string;
  public Leave_type : string;
  public comment : string;
  public status : string;
  public fk_worker_id : number;
  public worker_id: number;
  public email_id: string;
  public password: string;
  public worker_name:string;
  public mobile_no: number;
  public address: string;
  public worker_image: string;
  public joining_date: string;
  constructor(private _leaveData : LeaveDataService,private _act_routs : ActivatedRoute,private _router : Router) { }

  ngOnInit() {

    this.leave_id = this._act_routs.snapshot.params['leave_id'];
    console.log(this.leave_id);

    this._leaveData.getLeaveById(this.leave_id).subscribe(
      (data : any)=>{
        console.log(data);
          this.leaveStartDate = data[0].leaveStartDate,
          this.leaveEndDate = data[0].leaveEndDate,
          this.Leave_type = data[0].leave_type,
          this.comment = data[0].comment,
          this.status = data[0].status,
          this.fk_worker_id = data[0].fk_worker_id,
          this.worker_id= data[0].worker_id,
          this.email_id= data[0].email_id,
          this.password= data[0].password,
          this.worker_name= data[0].worker_name,
          this.mobile_no= data[0].mobile_no,
          this.address= data[0].address,
          this.worker_image = data[0].worker_image,
          this.joining_date = data[0].joining_date
      }
    );
  }

  onClickBAck()
  {
    this._router.navigate(['/nav/leave/'])
  }
}
