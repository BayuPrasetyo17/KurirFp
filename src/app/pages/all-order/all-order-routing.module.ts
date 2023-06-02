import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllOrderPage } from './all-order.page';

const routes: Routes = [
  {
    path: '',
    component: AllOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllOrderPageRoutingModule {}
