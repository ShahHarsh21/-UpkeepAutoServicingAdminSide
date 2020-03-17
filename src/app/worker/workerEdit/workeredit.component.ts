import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from '../worker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { worker } from '../worker';

@Component({
  selector: 'app-workeredit',
  templateUrl: './workeredit.component.html',
  styleUrls: ['./workeredit.component.css']
})
export class WorkereditComponent implements OnInit {
  [x: string]: any;
  workerEdit:FormGroup;
  worker_rout:number=0;
  constructor(public _data:WorkerService,public _act_routs:ActivatedRoute,public _routs:Router) { }

  ngOnInit() {
    this.worker_rout=this._act_routs.snapshot.params['worker_id'];

    this.workerEdit=new FormGroup({
      worker_id:new FormControl(),
      email_id:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      worker_name:new FormControl(null,[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      mobile_no:new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      address:new FormControl(),
      joining_date:new FormControl(),
    });

    this._data.getWorkerById(this.worker_rout).subscribe(
        (data:any)=>{
          this.formDataBind(data[0]);
       }
      );
  }
  formDataBind(item:worker)
  {
    this.workerEdit.patchValue({
      worker_id:item.worker_id,
      email_id:item.email_id,
      password:item.password,
      worker_name:item.worker_name,
      mobile_no:item.mobile_no,
      address:item.address,
      joining_date:item.joining_date
      });
  }
  onWorkerEdit()
  {
    this._data.updateWorker(this.workerEdit.value).subscribe(
      (data:any)=>{
        this._routs.navigate(['/nav/worker/']);
      }
    );
  }
  onCancle()
  {
	  this._router.navigate(['/nav/worker/']);
  }
}
