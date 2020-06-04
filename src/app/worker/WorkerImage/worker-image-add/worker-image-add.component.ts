import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkerService } from '../../worker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-worker-image-add',
  templateUrl: './worker-image-add.component.html',
  styleUrls: ['./worker-image-add.component.css']
})
export class WorkerImageAddComponent implements OnInit {
  params_worker_id:number=0;
  selectedFile:File;
  editWorkerImg:FormGroup;
  workerImg :string='';
  constructor(public _workerData :WorkerService,public _Act_routs:ActivatedRoute,public _router:Router) { }

  ngOnInit() {
    this.params_worker_id=this._Act_routs.snapshot.params['worker_id'];
    this.editWorkerImg=new FormGroup({
      image : new FormControl(null)
    });
    this._workerData.getWorkerPhotById(this.params_worker_id).subscribe(
      (Data:any)=>{
         this.workerImg =  Data[0].worker_image;
      }
    );
  }
  onChange(f)
  {
    this.selectedFile = <File>f.target.files[0];
  }
  onclose()
  {
    this._router.navigate(["/nav/worker/"]);
  }

  onImageSubmit()
  {
    const fd = new FormData();
    if (this.selectedFile != null)
    {
      fd.append("img", this.selectedFile, this.selectedFile.name);
    }
    else
    {
      alert("YOU HAVE IMAGE");
    }

    this._workerData.updateWorkerImage(this.params_worker_id,fd).subscribe(
      (Data:any[])=>{
        this._router.navigate(['/nav/worker']);
      }
    );
  }
}
