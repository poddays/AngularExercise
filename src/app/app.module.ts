import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserDetailComponent } from './user-container/components/user-detail/user-detail.component';
import { UserListComponent } from './user-container/components/user-list/user-list.component';
import { OrderContainerComponent } from './order-container/order-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent,
    OrderContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
