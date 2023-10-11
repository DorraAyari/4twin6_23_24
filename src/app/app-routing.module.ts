import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './core/manageUser/add-user/add-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { DetailUserComponent } from './core/manageUser/detail-user/detail-user.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';

import { FirstComponent } from './first/first.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  { path: 'produit', component: ListProductsComponent },

 {path:'user',component:ListUserComponent},
 {path:'first', component:FirstComponent},
 {path:'**',component:NotfoundComponent},
 {path:'manage',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then(m=>m.AuthModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
