import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from '../../leave-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/worker/worker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leave-viewmore',
  templateUrl: './leave-viewmore.component.html',
  styleUrls: ['./leave-viewmore.component.css']
})
export class LeaveViewmoreComponent implements OnInit {

  leave_id : number = 0;
  worker_name : string ='';
  mobile_no : string = '';
  email_id : string = '';
  worker_img : string ='';
  leaveStartDate : string ='';
  leaveEndDate : string ='';
  comment : string ='';
  status : string ='';
  fk_worker_id : number;
  constructor(public _workerDataService :WorkerService,public _LeaveDataService : LeaveDataService,public _act_routs : ActivatedRoute,public _routs : Router) { }

  ngOnInit() {
    this.leave_id = this._act_routs.snapshot.params['leave_id'];
    console.log(this.leave_id);
    this._LeaveDataService.getLeaveById(this.leave_id).subscribe(
      (leaveData : any[])=>{
        this.worker_name =leaveData[0].worker_name,
        this.mobile_no =leaveData[0].mobile_no,
        this.email_id =leaveData[0].email_id,
        this.leaveStartDate =leaveData[0].leaveStartDate,
        this.leaveEndDate =leaveData[0].leaveEndDate,
        this.comment=leaveData[0].comment,
        this.status =leaveData[0].status
        this.fk_worker_id = leaveData[0].fk_worker_id


        this._workerDataService.getImageById(this.fk_worker_id).subscribe(
          (workerImg : any)=>{
            console.log(workerImg[0]);
            this.worker_img = environment.url + 'public/Images/WorkerImages/' + workerImg[0];
          }
        );
      }
    );
  }

  onClose()
  {
    this._routs.navigate(['/nav/leave']);
  }
}
