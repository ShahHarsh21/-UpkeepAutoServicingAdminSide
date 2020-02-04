import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ColordataService } from '../colordata.service';
import { Router } from '@angular/router';
import { color_class } from '../color';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  addColor:FormGroup;
  constructor(private _data:ColordataService,private _router:Router,public dialogref: MatDialogRef<ColorAddComponent>, @Inject(MAT_DIALOG_DATA) public data: color_class) {

  }

  ngOnInit() {
    this.addColor=new FormGroup({
      color_name:new FormControl(null)
    });
  }
  onColorAdd()
  {
    console.log(this.addColor.value);
    this._data.addColor(this.addColor.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.dialogref.close();
      }
    );
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}
