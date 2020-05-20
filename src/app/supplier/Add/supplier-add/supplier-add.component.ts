import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SupplierdataService } from '../../supplierdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {
  addSupplier:FormGroup;
  constructor(public _data : SupplierdataService,public _router : Router) { }

  ngOnInit() {
    this.addSupplier= new FormGroup({

      supplier_name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(\s[a-zA-Z]+)?$')]),
      firm_name : new FormControl(null,[Validators.required]),
      firm_address: new FormControl(null),
      contact_no: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    });
  }

  onUserAdd()
  {
    let supplierObj = {
      supplier_name: this.addSupplier.value.supplier_name,
      firm_name : this.addSupplier.value.firm_name,
      firm_address: this.addSupplier.value.firm_address,
      contact_no: this.addSupplier.value.contact_no,
    };
    // console.log(supplierObj);
    this._data.AddSupplier(supplierObj).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['nav/supplier/']);
      }
    );
  }

  onCancle()
  {
    this._router.navigate(['/nav/supplier/']);
  }
}
