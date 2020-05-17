import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FebPageRoutingModule } from './feb-routing.module';

import { FebPage } from './feb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FebPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FebPage]
})
export class FebPageModule {}
