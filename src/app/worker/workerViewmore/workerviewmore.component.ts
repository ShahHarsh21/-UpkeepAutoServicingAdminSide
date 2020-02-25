import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { worker } from '../worker';
import { environment } from 'src/environments/environment';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workerviewmore',
  templateUrl: './workerviewmore.component.html',
  styleUrls: ['./workerviewmore.component.css']
})
export class WorkerviewmoreComponent implements OnInit {
  worker_id : number = 0;
  worker_name : string = '';
  email_id : string = '';
  mobile_no : number =0 ;
  address : string = '';
  worker_image: string = '';
  joining_date : string='';
  workerImage :string = ' ';
  constructor(public _data:WorkerService,public dialogref: MatDialogRef<WorkerviewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
    this._data.getWorkerById(this.data).subscribe(
      (Worker_Data:any)=>{
        console.log(Worker_Data);
        this.worker_id = Worker_Data[0].worker_id;
        this.worker_name = Worker_Data[0].worker_name;
        this.email_id=Worker_Data[0].email_id;
        this.mobile_no = Worker_Data[0].mobile_no;
        this.worker_image=Worker_Data[0].worker_image;
        this.address = Worker_Data[0].address;
        this.joining_date = Worker_Data[0].joining_date;
        console.log(Worker_Data[0].worker_image);
        this.workerImage = environment.url+ 'Images/WorkerImages/' + Worker_Data[0].worker_image;
      }
    );

  }

}
