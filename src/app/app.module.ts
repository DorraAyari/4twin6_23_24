import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BackgroundColorChangeDirective } from './background-color-change.directive';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DetailUserComponent } from './core/manageUser/detail-user/detail-user.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import { AddUserComponent } from './core/manageUser/add-user/add-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { AuthModule } from './core/manageUser/auth/auth.module';
import { AuthRoutingModule } from './core/manageUser/auth/auth-routing.module';
import { ManageProductModule } from './core/manage-product/manage-product.module';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListusersComponent,
    ListUserComponent,
    BackgroundColorChangeDirective,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    ListProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ManageProductModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
