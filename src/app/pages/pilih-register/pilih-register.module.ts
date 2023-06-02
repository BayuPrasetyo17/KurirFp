import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihRegisterPageRoutingModule } from './pilih-register-routing.module';

import { PilihRegisterPage } from './pilih-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihRegisterPageRoutingModule
  ],
  declarations: [PilihRegisterPage]
})
export class PilihRegisterPageModule {}
