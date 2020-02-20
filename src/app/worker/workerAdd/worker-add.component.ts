import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {
  workerAdd:FormGroup;
  constructor(public _data:WorkerService,private _router:Router ) { }

  ngOnInit() {
    this.workerAdd= new FormGroup({
      email_id: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      worker_name: new FormControl(null,[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      address: new FormControl(null),
      mobile_no: new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      joining_date:new FormControl(null)
    });
  }
  onCancle()
  {
    this._router.navigate(['/nav/worker/']);
  }
  onWorkerAdd()
  {
    let workerobj = {
      email_id: this.workerAdd.value.email_id,
      password: this.workerAdd.value.password,
      worker_name: this.workerAdd.value.worker_name,
      address: this.workerAdd.value.address,
      mobile_no: this.workerAdd.value.mobile_no,
      joining_date:this.workerAdd.value.joining_date,
    };
    this._data.addWorker(workerobj).subscribe(
      (data:any)=>{
        this._router.navigate(['nav/worker/']);
      }
    );
  }
}
