import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ColordataService } from '../colordata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  addColor:FormGroup;
  constructor(private _data:ColordataService,private _router:Router) {
    this.addColor=new FormGroup({
      color_name:new FormControl(null)
    });
  }

  ngOnInit() {
  }
  onColorAdd()
  {
    console.log(this.addColor.value);
    this._data.addColor(this.addColor.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/color']);
      }
    );
  }
}
