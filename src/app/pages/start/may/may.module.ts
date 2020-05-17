import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayPageRoutingModule } from './may-routing.module';

import { MayPage } from './may.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MayPage]
})
export class MayPageModule {}
