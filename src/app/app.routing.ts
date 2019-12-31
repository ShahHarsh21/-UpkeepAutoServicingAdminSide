import { Routes,RouterModule } from '@angular/router';

import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductViewMoreComponent } from './product/product_view_more/product-view-more/product-view-more.component';
import { ProductEditComponent } from './product_edit/product-edit/product-edit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';
// import { CategoryviewmoreComponent } from './category/categoryviewmore/categoryviewmore/categoryviewmore.component';
import { CategoryEditComponent } from './category/categoryEdit/category-edit/category-edit.component';
import { ProductAddComponent } from './product/productAdd/product-add/product-add.component';
import { ColorDisplayComponent } from './color/color-display/color-display.component';
import { ColorEditComponent } from './color/color_edit/color-edit/color-edit.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';
import { EmployeeAddComponent } from '../app/employee/AddEmployee/employee-add.component';
import { EmployeeEditComponent } from './employee/employeeEdit/employee-edit/employee-edit.component';
import { SlotDisplayComponent } from './slot/slot-display/slot-display.component';
import { SlotAddComponent } from './slot/slot-add/slot-add.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';

// import { CategoryviewmoreComponent } from './category/categoryviewmore/categoryviewmore/categoryviewmore.component';
const arr:Routes=[
    {path:'',component:ProductDisplayComponent},
    {path:'product',component:ProductDisplayComponent},
    // {path:'productViewMore',component:ProductViewMoreComponent},
    {path:'productEdit/:product_id',component:ProductEditComponent},
    {path:'category',component:CategoryDisplayComponent},
    // {path:'categoryViewMore',component:CategoryviewmoreComponent},
    {path:'categoryEdit',component:CategoryEditComponent},
    {path:'productAdd',component:ProductAddComponent},
    {path:'color',component:ColorDisplayComponent},
    {path:'colorEdit',component:ColorEditComponent},
    {path:'Employee',component:EmployeeDisplayComponent},
    {path:'EmployeeAdd',component:EmployeeAddComponent},
    {path:'EmloyeeEdit',component:EmployeeEditComponent},
    {path:'Slot',component:SlotDisplayComponent},
    {path:'slotAdd',component:SlotAddComponent},
    {path:'stock',component:StockDisplayComponent},
    {path:'supplier',component:SupplierDisplayComponent}
]
export const routingArr=RouterModule.forRoot(arr);
