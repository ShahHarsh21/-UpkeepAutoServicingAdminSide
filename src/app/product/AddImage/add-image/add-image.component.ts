import { Component, OnInit, Inject } from '@angular/core';
import { ProductdataService } from '../../productdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../product';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  imageAdd:FormGroup;
  selectedfile : File= null;
  EmpImage: string = '';
  product_id:number=0;
  product_name:string='';
  item:Product[];
  constructor(private _router:Router,private _act_routs:ActivatedRoute,private _Data:ProductdataService,private _routs:Router) { }

  ngOnInit() {
    this.product_id=this._act_routs.snapshot.params['product_id'];
    this._Data.getProductById(this.product_id).subscribe(
      (data:any)=>{
        this.item=data;
        this.product_name=data[0].product_name;
      }
    );
    this.imageAdd=new FormGroup({
      product_image:new FormControl(null)
    });
  }
  onchange(f)
  {
    this.selectedfile = <File>f.target.files[0];
    console.log(this.selectedfile);
  }

  onImageAdd()
  {
    const fd = new FormData();
    if (this.selectedfile != null)
    {
      console.log(this.selectedfile);
      fd.append("img", this.selectedfile, this.selectedfile.name);
    }
    else
    {
      // fd.append("img");
      alert("YOU HAVE IMAGE");
    }
    console.log(this.selectedfile);
    console.log(this.item);

    this._Data.updatePhoto(this.product_id, fd).subscribe(
      (data: any) => {
        console.log(data);
        alert("YOU IMAGE HAS BEEN UPDATED");
        this._routs.navigate(['/nav/product']);
      }
    );
  }
  onClickCancel()
  {
    this._router.navigate(['nav/product']);
  }
}
