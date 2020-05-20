import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveDataService } from '../../leave-data.service';

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {

  selectedStatus : string ='';
  approveLeaveForm : FormGroup;
  leave_id : number = 0;
  constructor(public _routs : Router,public _leaveDataService : LeaveDataService,public _act_routs : ActivatedRoute) { }

  ngOnInit() {

    this.leave_id = this._act_routs.snapshot.params['leave_id'];

    this.approveLeaveForm = new FormGroup({
      worker_name : new FormControl(),
      email_id: new FormControl(),
      mobile_no: new FormControl(),
      leaveStartDate: new FormControl(),
      leaveEndDate: new FormControl(),
      Leave_Type: new FormControl(),
      status : new FormControl('Waiting'),
      comment: new FormControl(),
    });

    this._leaveDataService.getLeaveById(this.leave_id).subscribe(
      (leaveData :any)=>{
        console.log(leaveData);
        this.formDataBind(leaveData[0]);
      }
    );
  }

  formDataBind(item)
  {
    this.approveLeaveForm.patchValue({

      worker_name : item.worker_name,
      email_id: item.email_id,
      mobile_no: item.mobile_no,
      leaveStartDate: item.leaveStartDate,
      leaveEndDate: item.leaveEndDate,
      Leave_Type: item.Leave_Type,
      status : item.status,
      comment: item.comment,
    });
  }

  onLeaveEdit()
  {
    console.log(this.approveLeaveForm.value);
  }

  onTypeChange(value)
  {
    console.log(value);
  }

  onClickBack()
  {
    this._routs.navigate(['nav/leave/']);
  }

  onRadioChange(value)
  {
    this.selectedStatus = value;
    console.log(this.selectedStatus);
  }
}
