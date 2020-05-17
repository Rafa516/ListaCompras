import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptPageRoutingModule } from './sept-routing.module';

import { SeptPage } from './sept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeptPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeptPage]
})
export class SeptPageModule {}
