import { Component, OnInit } from '@angular/core';
import { supplier } from '../../supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierdataService } from '../../supplierdata.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductdataService } from 'src/app/product/productdata.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
// import { ImagePopUpPageComponent } from '../../ImagePopUp/image-pop-up-page/image-pop-up-page.component';

@Component({
  selector: 'app-supplier-viewmore',
  templateUrl: './supplier-viewmore.component.html',
  styleUrls: ['./supplier-viewmore.component.css']
})
export class SupplierViewmoreComponent implements OnInit {
  supplier_Arr : any[]=[];
  supplier_id : number = 0 ;
  dataSource: MatTableDataSource<any>;
  flag :boolean = true;
  productImage : string[]=[];
  displayedColumns:string[]=['product_image','product_name','product_price','quantity','category_name'];
  constructor(public _act_routs : ActivatedRoute,public _product_image : ProductdataService , public _data : SupplierdataService,public _router : Router,public _dialog : MatDialog) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();

    this.supplier_id = this._act_routs.snapshot.params['supplier_id'];
    console.log(this.supplier_id);

    this._data.getSupplierByIdWithAllDetails(this.supplier_id).subscribe(
      (supplier_Data : any[])=>{
        if(supplier_Data == null)
        {
          this.flag = false;
        }
        this.supplier_Arr = supplier_Data
        console.log(this.supplier_Arr);
        this.dataSource.data=this.supplier_Arr;
      }
    );
  }
  onImageClick(product_image)
  {
    // this._dialog.open(ImagePopUpPageComponent,{data:product_image});
  }
  onClose()
  {
    this._router.navigate(['/nav/supplier/']);
  }
}
