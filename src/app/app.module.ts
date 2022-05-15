import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserDetailComponent } from './user-container/components/user-detail/user-detail.component';
import { UserListComponent } from './user-container/components/user-list/user-list.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { OrderListComponent } from './order-container/order-list/order-list.component';
import { OrderSingleComponent } from './order-container/order-single/order-single.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { OrderDetailComponent } from './order-container/order-detail/order-detail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    UserSingleComponent,
    OrderDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
