import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import { MatPaginatorModule,MatFormFieldModule,MatInputModule,MatSortModule,MatDialogModule, MatCardActions, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardModule, MatRadioModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { routingArr } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDisplayComponent } from './login/login-display/login-display.component';
import { SignupdisplayComponent } from './signup/signupdisplay/signupdisplay.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';
import { UserViewMoreComponent } from './user/user-view-more/user-view-more.component';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductViewMoreComponent } from './product/product-view-more/product-view-more.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryDisplayComponent } from './category/category-display/category-display.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { StockDisplayComponent } from './stock/stock-display/stock-display.component';
import { StockEditComponent } from './stock/stockEdit/stock-edit/stock-edit.component';
import { StockViewmoreComponent } from './stock/stockViewMore/stock-viewmore/stock-viewmore.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsmoreComponent } from './order-details/order-detailsmore/order-detailsmore.component';
import { SupplierDisplayComponent } from './supplier/supplier-display/supplier-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddImageComponent } from './product/AddImage/add-image/add-image.component';
import { StockAddComponent } from './stock/stockAdd/stock-add/stock-add.component';
import { ServiceDisplayComponent } from './service/serviceDisplay/service-display/service-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StockEditComponent,
    UserDisplayComponent,
    ProductDisplayComponent,
    ProductViewMoreComponent,
    ProductEditComponent,
    CategoryDisplayComponent,
    ProductAddComponent,
    CategoryEditComponent,
    StockDisplayComponent,
    SupplierDisplayComponent,
    UserViewMoreComponent,
    LoginDisplayComponent,
    SignupdisplayComponent,
    UseraddComponent,
    StockEditComponent,
    StockViewmoreComponent,
    UserEditComponent,
    PageNotFoundComponent,
    CategoryAddComponent,
    OrderDetailsComponent,
    OrderDetailsmoreComponent,
    CategoryEditComponent,
    OrderDetailsComponent,
    OrderDetailsmoreComponent,
    AddImageComponent,
    StockAddComponent,
    ServiceDisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routingArr,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
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
    StockViewmoreComponent,
    UserViewMoreComponent,
    OrderDetailsmoreComponent,
    CategoryAddComponent,
    AddImageComponent,
     ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
