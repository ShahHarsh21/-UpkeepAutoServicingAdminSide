import { Routes,RouterModule } from '@angular/router';
import {LoginDisplayComponent} from './login/login-display/login-display.component';
import{SignupdisplayComponent} from './signup/signupdisplay/signupdisplay.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{UserDisplayComponent}from './user/user-display/user-display.component';
import {UserauthguardService}from './userauthguard.service';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AddImageComponent } from './product/AddImage/add-image/add-image.component';

import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';

import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { StockEditComponent } from './stock/stockEdit/stock-edit/stock-edit.component';
import { StockAddComponent } from './stock/stockAdd/stock-add/stock-add.component';

import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

//import { CategoryAddComponent } from './category/category-add/category-add.component';

//import { StockEditComponent } from './stock/stockEdit/stock-edit/stock-edit.component';

//import { AddImageComponent } from './product/AddImage/add-image/add-image.component';
//import { StockAddComponent } from './stock/stockAdd/stock-add/stock-add.component';
import { AddVehicleAssignedComponent } from './VehicleAssigned/add-vehicle-assigned/add-vehicle-assigned.component';
import { VehicleDisplayComponent } from './VehicleAssigned/vehicleAssignedDisplay/vehicle-display/vehicle-display.component';
import { WorkerDisplayComponent } from './worker/workerDisplay/worker-display.component';
import { WorkereditComponent } from './worker/workerEdit/workeredit.component';
import { WorkerAddComponent } from './worker/workerAdd/worker-add.component';
import { ServiceDisplayComponent } from './service/serviceDisplay/service-display/service-display.component';
import { ServiceAddComponent } from './service/serviceAdd/service-add/service-add.component';
import { ServiceEditComponent } from './service/serviceEdit/service-edit/service-edit.component';
import { WorkerImageAddComponent } from './worker/WorkerImage/worker-image-add/worker-image-add.component';
import { ServiceViewmoreComponent } from './service/serviceViewMore/service-viewmore/service-viewmore.component';
import { UserViewMoreComponent } from './user/user-view-more/user-view-more.component';
import { WorkerviewmoreComponent } from './worker/workerViewmore/workerviewmore.component';


const arr:Routes=[
    {path:'',component:LoginDisplayComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:NavBarComponent,children:[
        {path:'',component:ServiceDisplayComponent},
        {path:'signup',component:SignupdisplayComponent},
        {path:'user',component:UserDisplayComponent},
        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'product',component:ProductDisplayComponent},
        {path:'productEdit/:product_id',component:ProductEditComponent},
        {path:'productAdd',component:ProductAddComponent},
        {path:'Add_image/:product_id',component:AddImageComponent},
        {path:'category',component:CategoryDisplayComponent},
        {path:'categoryAdd',component:CategoryAddComponent},
        {path:'order_details',component:OrderDetailsComponent},
        {path:'stock',component:StockDisplayComponent},
        {path:'stockEdit/:stock_id',component:StockEditComponent},
        {path:'stockAdd',component:StockAddComponent},
        {path:'supplier',component:SupplierDisplayComponent},
        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'Add_image/:product_id',component:AddImageComponent},
        {path:'vehicleAssignedAdd',component:AddVehicleAssignedComponent},
        {path:'vehicleAssigned',component:VehicleDisplayComponent},
        {path:'worker',component:WorkerDisplayComponent},
        {path:'workerEdit/:worker_id',component:WorkereditComponent},
        {path:'workerAdd',component:WorkerAddComponent},
        {path:'service',component:ServiceDisplayComponent},
        {path:'serviceAdd',component:ServiceAddComponent},
        {path:'serviceEdit/:service_id',component:ServiceEditComponent},
        {path:'userViewmore/:user_id',component:UserViewMoreComponent},
        {path:'serviceViewmore/:service_id',component:ServiceViewmoreComponent},
        {path:'workerViewMore/:worker_id',component:WorkerviewmoreComponent},
        {path:'wokerImage/:worker_id',component:WorkerImageAddComponent}
    ]
    },
    {path:'**',component:PageNotFoundComponent}
]
export const routingArr=RouterModule.forRoot(arr);
