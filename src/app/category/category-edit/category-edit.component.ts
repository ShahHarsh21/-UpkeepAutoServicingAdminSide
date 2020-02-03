import { Component, OnInit } from '@angular/core';
import { CategorydataService } from '../categorydata.service';
import { Router } from '@angular/router';
import { category } from '../category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category_id:number;
  category_name:string='';
  category_type:number;
  constructor(private _data:CategorydataService,private _routs:Router) { }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (data:any)=>{
        // // console.log(data);
        console.log(data[0].category_id);
        console.log(data[0].category_name);
        console.log(data[0].category_type);
        this.category_id=data[0].category_id;
        this.category_name=data[0].category_name;
        this.category_type=data[0].category_type;
      }
    );
  }
  onProductEdit(item:category[])
  {
    this._data.updateCategory(this.category_id,item).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['category']);
      }
    );
  }
}
