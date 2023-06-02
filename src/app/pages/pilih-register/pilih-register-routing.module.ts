import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihRegisterPage } from './pilih-register.page';

const routes: Routes = [
  {
    path: '',
    component: PilihRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihRegisterPageRoutingModule {}
