import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOrderPageRoutingModule } from './all-order-routing.module';

import { AllOrderPage } from './all-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOrderPageRoutingModule
  ],
  declarations: [AllOrderPage]
})
export class AllOrderPageModule {}
