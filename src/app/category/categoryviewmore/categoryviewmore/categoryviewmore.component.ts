import { Component, OnInit, inject, Inject } from '@angular/core';
import { category } from '../../category';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-categoryviewmore',
  templateUrl: './categoryviewmore.component.html',
  styleUrls: ['./categoryviewmore.component.css']
})
export class CategoryviewmoreComponent implements OnInit {
  category_id:number=0;
  category_name:string='';
  category_type:number=0;
  dialogref: any;
  constructor(public _dialogref: MatDialogRef<CategoryviewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data: category) { }

  ngOnInit() {
    this.category_id=this.data.category_id;
    this.category_name=this.data.category_name;
    this.category_type=this.data.category_type;
  }
  onClickCancel()
  {
    this._dialogref.close();
  }
}
