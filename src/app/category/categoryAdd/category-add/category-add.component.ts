import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategorydataService } from '../../categorydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryAdd:FormGroup;
  constructor(private _Data:CategorydataService,private _routs:Router) {
    this.categoryAdd=new FormGroup({
      category_id:new FormControl(null),
      category_name:new FormControl(null)
    });
  }

  ngOnInit() {
  }
  onCategoryAdd()
  {
    this._Data.addCategory(this.categoryAdd.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['nav/Category']);
      }
    );
  }
}
