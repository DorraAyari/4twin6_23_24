import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductRoutingModule } from './manage-product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    ManageProductRoutingModule
  ]
})
export class ManageProductModule { }
