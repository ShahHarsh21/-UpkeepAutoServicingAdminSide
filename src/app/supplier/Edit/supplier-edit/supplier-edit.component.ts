import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierdataService } from '../../supplierdata.service';
import { supplier } from '../../supplier';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  editSupplier : FormGroup;
  supplier_id : number = 0;
  supplierArr : any[]=[];
  constructor(public _router : Router,public _Act_routs : ActivatedRoute,public _supplierData : SupplierdataService) { }

  ngOnInit() {

    this.editSupplier= new FormGroup({

      supplier_name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      firm_name : new FormControl(null,[Validators.required]),
      firm_address: new FormControl(null),
      contact_no: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    });

    this.supplier_id = this._Act_routs.snapshot.params['supplier_id'];
    console.log(this.supplier_id);

    this._supplierData.getSupplierById(this.supplier_id).subscribe(
      (supplierData :any[])=>{
        console.log(supplierData);
        this.supplierArr = supplierData;
        this.formDataBind(supplierData[0]);
      }
    );
  }

  formDataBind(item)
  {
    console.log(item);
    this.editSupplier.patchValue({
      supplier_name : item.supplier_name,
      firm_name : item.firm_name,
      firm_address : item.firm_address,
      contact_no : item.contact_no
    });
  }

  onSupplierEdit()
  {
    console.log(this.editSupplier.value);
    this._supplierData.updateSupplier(this.supplier_id,this.editSupplier.value).subscribe(
      (Data:any)=>{
        console.log(Data);
        this._router.navigate(['/nav/supplier/']);
      }
    );
  }

  onCancle()
  {
    this._router.navigate(['/nav/supplier/']);
  }
}
