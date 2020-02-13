import { Routes,RouterModule } from '@angular/router';
import {LoginDisplayComponent} from './login/login-display/login-display.component';
import{SignupdisplayComponent} from './signup/signupdisplay/signupdisplay.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{UserDisplayComponent}from './user/user-display/user-display.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';

import { ColorDisplayComponent } from './color/color-display/color-display.component';
import { ColorEditComponent } from './color/color-edit/color-edit.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';

import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { SlotDisplayComponent } from './slot/slot-display/slot-display.component';
import { SlotAddComponent } from './slot/slot-add/slot-add.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import {UserauthguardService}from './userauthguard.service';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartDisplayComponent } from './cart/cart-display/cart-display.component';
import { CartaddComponent } from './cart/cartadd/cartadd.component';
import { CarteditComponent } from './cart/cartedit/cartedit.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SlotEditComponent } from './slot/slot-edit/slot-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { ColorAddComponent } from './color/color-add/color-add.component';
import { StockEditComponent } from './stock/stockEdit/stock-edit/stock-edit.component';
import { DeliveryBoyAllotComponent } from './slot/EmployeeAllot/delivery-boy-allot/delivery-boy-allot.component';
import { WorkerAllotComponent } from './slot/EmployeeAllot/worker/worker-allot.component';
import { AddImageComponent } from './product/AddImage/add-image/add-image.component';


const arr:Routes=[
    {path:'',component:LoginDisplayComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:NavBarComponent,children:[
        {path:'signup',component:SignupdisplayComponent},
        {path:'user',component:UserDisplayComponent},
        {path:'product',component:ProductDisplayComponent},
        {path:'productEdit/:product_id',component:ProductEditComponent},
        {path:'category',component:CategoryDisplayComponent},
        {path:'categoryAdd',component:CategoryAddComponent},
        {path:'productAdd',component:ProductAddComponent},
        {path:'color',component:ColorDisplayComponent},
        {path:'colorEdit',component:ColorEditComponent},
        {path:'colorAdd',component:ColorAddComponent},
        {path:'cart',component:CartDisplayComponent},
        {path:'order_details',component:OrderDetailsComponent},
        {path:'cartAdd',component:CartaddComponent},
        {path:'cartEdit/:cart_id',component:CarteditComponent},
        {path:'Employee',component:EmployeeDisplayComponent},
        {path:'EmployeeEdit/:employee_id',component:EmployeeEditComponent},
        {path:'Slot',component:SlotDisplayComponent},
        {path:'slotAdd',component:SlotAddComponent},
        {path:'stock',component:StockDisplayComponent},
        {path:'stockEdit/:stock_id',component:StockEditComponent},
        {path:'supplier',component:SupplierDisplayComponent},
        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'slotEdit/:slot_register_id',component:SlotEditComponent},
        {path:'deliveryboy_allot',component:DeliveryBoyAllotComponent},
        {path:'worker_allot/:slot_register_id',component:WorkerAllotComponent},
        {path:'Add_image/:product_id',component:AddImageComponent}
    ]
    },
    {path:'**',component:PageNotFoundComponent}
]
export const routingArr=RouterModule.forRoot(arr);
