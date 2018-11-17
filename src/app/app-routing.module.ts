import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * @author akshita
 * route to the module
 * apply lazyloading
 */
const routes: Routes = [
  {path:'',loadChildren:'./order-details/order-details.module#OrderDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
