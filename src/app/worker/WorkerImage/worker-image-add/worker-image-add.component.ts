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
    console.log(this.params_worker_id);
    this.editWorkerImg=new FormGroup({
      image : new FormControl(null)
    });
    this._workerData.getWorkerPhotById(this.params_worker_id).subscribe(
      (Data:any)=>{
        console.log(Data[0].worker_image);
         this.workerImg = environment.url+ 'Images/WorkerImages/' + Data[0].worker_image;
      }
    );
  }
  onChange(f)
  {
    // console.log(this.editWorkerImg.value.image);
    this.selectedFile = <File>f.target.files[0];
    console.log(this.selectedFile);
  }

  onImageSubmit()
  {
    const fd = new FormData();
    if (this.selectedFile != null)
    {
      console.log(this.selectedFile);
      fd.append("img", this.selectedFile, this.selectedFile.name);
    }
    else
    {
      // fd.append("img");
      alert("YOU HAVE IMAGE");
    }
    console.log(this.selectedFile);

    // this._Data.updatePhoto(this.product_id, fd).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     alert("YOU IMAGE HAS BEEN UPDATED");
    //     this._routs.navigate(['/nav/product']);
    //   }
    // );
    this._workerData.updateWorkerImage(this.params_worker_id,fd).subscribe(
      (Data:any[])=>{
        console.log(Data);
        this._router.navigate(['/nav/worker']);
      }
    );
  }
}
