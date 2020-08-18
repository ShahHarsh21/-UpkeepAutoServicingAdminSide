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
import { VehicleviewmoreComponent } from './VehicleAssigned/vehicleviewmore/vehicleviewmore.component';
import { ProductViewMoreComponent } from './product/product-view-more/product-view-more.component';
import { CategoryViewmoreComponent } from './category/viewmore/category-viewmore/category-viewmore.component';
import { ServiceRedirectComponent } from './service/service-redirect/service-redirect.component';
import { StockViewmoreComponent } from './stock/stockViewMore/stock-viewmore/stock-viewmore.component';
import { SupplierEditComponent } from './supplier/Edit/supplier-edit/supplier-edit.component';
import { SupplierAddComponent } from './supplier/Add/supplier-add/supplier-add.component';
import { SupplierViewmoreComponent } from './supplier/viewmore/supplier-viewmore/supplier-viewmore.component';
import { LeaveDisplayComponent } from './leave/Display/leave-display/leave-display.component';
import { LeaveViewmoreComponent } from './leave/viewmore/leave-viewmore/leave-viewmore.component';
import { LeaveEditComponent } from './leave/Edit/leave-edit/leave-edit.component';
import { PastLeavesComponent } from './leave/Display/past/past-leaves/past-leaves.component';
import { CartDisplayComponent } from './Cart/Display/cart-display/cart-display.component';
import { OrderDisplayComponent } from './Order/Display/order-display/order-display.component';
import { OrderViewMoreComponent } from './Order/ViewMore/order-view-more/order-view-more.component';
import { OrderEditComponent } from './Order/Edit/order-edit/order-edit.component';
import { OrderDetailsDisplayComponent } from './OrderDetails/Display/order-details-display/order-details-display.component';
import { OrderDetailsViewMoreComponent } from './OrderDetails/ViewMore/order-details-view-more/order-details-view-more.component';
import { OrderDetailsEditComponent } from './OrderDetails/Edit/order-details-edit/order-details-edit.component';
import { CartDetailsDisplayComponent } from './CartDetails/Display/cart-details-display/cart-details-display.component';
import { CartDetailsEditComponent } from './CartDetails/Edit/cart-details-edit/cart-details-edit.component';
import { CartDetailsViewMoreComponent } from './CartDetails/Viewmore/cart-details-view-more/cart-details-view-more.component';
import { CartEditComponent } from './Cart/Edit/cart-edit/cart-edit.component';
import { CartViewmoreComponent } from './Cart/ViewMore/cart-viewmore/cart-viewmore.component';

const arr:Routes=[
    {path:'',component:LoginDisplayComponent},
    {
    path:'nav',canActivate:[UserauthguardService],component:NavBarComponent,children:[
        {path:'',component:UserDisplayComponent},
        {path:'signup',component:SignupdisplayComponent},

        {path:'user',component:UserDisplayComponent},
        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'userViewmore/:user_id',component:UserViewMoreComponent},

        {path:'product',component:ProductDisplayComponent},
        {path:'productViewmore/:product_id',component:ProductViewMoreComponent},
        {path:'productEdit/:product_id',component:ProductEditComponent},
        {path:'productAdd',component:ProductAddComponent},
        {path:'Add_image/:product_id',component:AddImageComponent},
        {path:'Add_image/:product_id',component:AddImageComponent},

        {path:'category',component:CategoryDisplayComponent},
        {path:'categoryAdd',component:CategoryAddComponent},
        {path:'categoryViewmore/:category_id',component:CategoryViewmoreComponent},

        {path:'order_details',component:OrderDetailsComponent},

        {path:'stock',component:StockDisplayComponent},
        {path:'stockEdit/:stock_id',component:StockEditComponent},
        {path:'stockAdd',component:StockAddComponent},
        {path:'stockViewmore/:stock_id',component:StockViewmoreComponent},

        {path:'supplier',component:SupplierDisplayComponent},
        {path:'supplierEdit/:supplier_id',component:SupplierEditComponent},
        {path:'supplierAdd',component:SupplierAddComponent},
        {path:'supplier_viewmore/:supplier_id',component:SupplierViewmoreComponent},

        {path:'userAdd',component:UseraddComponent},
        {path:'userEdit/:user_id',component:UserEditComponent},
        {path:'userViewmore/:user_id',component:UserViewMoreComponent},


        {path:'vehicleAssignedAdd',component:AddVehicleAssignedComponent},
        {path:'vehicleAssigned',component:VehicleDisplayComponent},
        {path:'VehicleAssignedViewmore/:vehicle_assigned_id',component:VehicleviewmoreComponent},

        {path:'worker',component:WorkerDisplayComponent},
        {path:'workerEdit/:worker_id',component:WorkereditComponent},
        {path:'workerAdd',component:WorkerAddComponent},
        {path:'workerViewMore/:worker_id',component:WorkerviewmoreComponent},
        {path:'wokerImage/:worker_id',component:WorkerImageAddComponent},

        {path:'service',component:ServiceDisplayComponent},
        {path:'serviceAdd',component:ServiceAddComponent},
        {path:'serviceEdit/:service_id',component:ServiceEditComponent},
        {path:'serviceRedirect',component:ServiceRedirectComponent},
        {path:'serviceViewmore/:service_id',component:ServiceViewmoreComponent},

        {path:'leave',component:LeaveDisplayComponent},
        {path:'leaveViewmore/:leave_id',component:LeaveViewmoreComponent},
        {path:'pastLeave/:leave_id',component:PastLeavesComponent},
        {path:'leaveEdit/:leave_id',component:LeaveEditComponent},

        {path:'Cart',component:CartDisplayComponent},
        {path:'CartViewMore/:cart_id',component:CartViewmoreComponent},
        {path:'CartEdit/:cart_id',component:CartEditComponent},

        {path:'CartDetails',component:CartDetailsDisplayComponent},
        {path:'CartDetailsViewMore/:CartDetails_id',component:CartDetailsViewMoreComponent},
        {path:'CartDetailsEdit/:CartDetails_id',component:CartDetailsEditComponent},


        {path:'Order',component:OrderDisplayComponent},
        {path:'OrderViewMore/:orderDetail_id',component:OrderViewMoreComponent},
        {path:'OrderEdit/:orderDetail_id',component:OrderEditComponent},

        {path:'OrderDetails',component:OrderDetailsDisplayComponent},
        {path:'OrderDetailsViewMore/:orderDetail_id',component:OrderDetailsViewMoreComponent},
        {path:'OrderDetailsEdit/:orderDetail_id',component:OrderDetailsEditComponent},
    ]
    },
    {path:'**',component:PageNotFoundComponent}
]
export const routingArr=RouterModule.forRoot(arr);
