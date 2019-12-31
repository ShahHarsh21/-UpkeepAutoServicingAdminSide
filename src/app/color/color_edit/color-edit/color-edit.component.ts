import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColordataService } from '../../colordata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { color_class } from '../../color';

@Component({
  selector: 'app-color-edit',
  templateUrl: './color-edit.component.html',
  styleUrls: ['./color-edit.component.css']
})
export class ColorEditComponent implements OnInit {
  // colorupdate:FormGroup;
  color_id:number;
  color_name:string;
  constructor(private _data:ColordataService,private _act:ActivatedRoute,private _routs:Router) {
    // this.colorupdate=new FormGroup({
    //   color_id:new FormControl(),
    //   color_name:new FormControl()
    // });
  }

  ngOnInit() {
    // this.color_id = this._act.snapshot.params['color_id'];
    this._data.getAllColor().subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
      this._data.getColorById(this.color_id).subscribe(
        (data:any)=>
        {
          console.log(data);
           this.color_id=data[0].color_id;
           this.color_name=data[0].color_name;
        }
      );
  }
  onColorEdit(item:color_class[])
  {
    // let item=this.colorupdate.value;
    this._data.updatecolor(this.color_id,item).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['color']);
      }
    );
  }
}
