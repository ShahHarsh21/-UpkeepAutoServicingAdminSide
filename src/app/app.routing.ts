import { Routes,RouterModule } from '@angular/router';
import {LoginDisplayComponent} from './login/login-display/login-display.component';
import{SignupdisplayComponent} from './signup/signupdisplay/signupdisplay.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{UserDisplayComponent}from './user/user-display/user-display.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductAddComponent } from './product/productAdd/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';
import { CategoryEditComponent } from './category/categoryEdit/category-edit/category-edit.component';
import { ColorDisplayComponent } from './color/color-display/color-display.component';
import { ColorEditComponent } from './color/color_edit/color-edit/color-edit.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';
import { EmployeeAddComponent } from '../app/employee/AddEmployee/employee-add.component';
import { EmployeeEditComponent } from './employee/employeeEdit/employee-edit/employee-edit.component';
import { SlotDisplayComponent } from './slot/slot-display/slot-display.component';
import { SlotAddComponent } from './slot/slot-add/slot-add.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import{UserauthguardService}from './userauthguard.service';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UserEditComponent } from './user/userEdit/user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlotEditComponent } from './slot/slot_edit/slot-edit/slot-edit.component';
import { CategoryAddComponent } from './category/categoryAdd/category-add/category-add.component';
import { ColorAddComponent } from './color/colorAdd/color-add/color-add.component';

const arr:Routes=[
    {path:'',component:LoginDisplayComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:NavBarComponent,children:[
        {path:'signup',component:SignupdisplayComponent},
        {path:'user',component:UserDisplayComponent},
        {path:'product',component:ProductDisplayComponent},
        {path:'productEdit/:product_id',component:ProductEditComponent},
        {path:'category',component:CategoryDisplayComponent},
        {path:'categoryEdit',component:CategoryEditComponent},
        {path:'categoryAdd',component:CategoryAddComponent},
        {path:'productAdd',component:ProductAddComponent},
        {path:'color',component:ColorDisplayComponent},
        {path:'colorEdit',component:ColorEditComponent},
        {path:'colorAdd',component:ColorAddComponent},
        {path:'Employee',component:EmployeeDisplayComponent},
        {path:'EmployeeAdd',component:EmployeeAddComponent},
        {path:'EmloyeeEdit',component:EmployeeEditComponent},
        {path:'Slot',component:SlotDisplayComponent},
        {path:'slotAdd',component:SlotAddComponent},
        {path:'stock',component:StockDisplayComponent},
        {path:'supplier',component:SupplierDisplayComponent},
        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'slotEdit/:slot_regester_id',component:SlotEditComponent}
    ]
    },
    {path:'**',component:PageNotFoundComponent}
]
export const routingArr=RouterModule.forRoot(arr);
