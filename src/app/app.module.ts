import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule,
   MatFormFieldModule,
    MatInputModule,
     MatSortModule,
     MatDialogModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { routingArr } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductViewMoreComponent } from './product/product_view_more/product-view-more/product-view-more.component';
import { ProductEditComponent } from './product_edit/product-edit/product-edit.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';
import { CategoryviewmoreComponent } from './category/categoryviewmore/categoryviewmore/categoryviewmore.component';
import { CategoryEditComponent } from './category/categoryEdit/category-edit/category-edit.component';
import { ProductAddComponent } from './product/productAdd/product-add/product-add.component';
import { ColorDisplayComponent } from './color/color-display/color-display.component';
import { ColorEditComponent } from './color/color_edit/color-edit/color-edit.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';
import { EmployeeAddComponent } from './employee/AddEmployee/employee-add.component';
import { EmpViewmoreComponent } from './employee/employeeviewmore/emp-viewmore/emp-viewmore.component';
import { EmployeeEditComponent } from './employee/employeeEdit/employee-edit/employee-edit.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { SlotDisplayComponent } from './slot/slot-display/slot-display.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import { SlotViewmoreComponent } from './slot/slotviewmore/slot-viewmore/slot-viewmore.component';
import { SlotAddComponent } from './slot/slot-add/slot-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductDisplayComponent,
    ProductViewMoreComponent,
    ProductEditComponent,
    CategoryDisplayComponent,
    CategoryviewmoreComponent,
    CategoryEditComponent,
    ProductAddComponent,
    ColorDisplayComponent,
    ColorEditComponent,
    EmployeeDisplayComponent,
    EmployeeAddComponent,
    EmpViewmoreComponent,
    EmployeeEditComponent,
    StockDisplayComponent,
    SlotDisplayComponent,
    SupplierDisplayComponent,
    SlotViewmoreComponent,
    SlotAddComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routingArr,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ProductViewMoreComponent,
    CategoryviewmoreComponent,
    EmpViewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
