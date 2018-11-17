import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import{FormsModule}from '@angular/forms'

//-----------------------------------------------------------------------------//

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderService } from './order.service';


@NgModule({
  imports: [
    CommonModule,
    OrderDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AddOrderComponent, ViewOrderComponent, EditOrderComponent],
  providers:[OrderService]
})
export class OrderDetailsModule { }
