import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarchPageRoutingModule } from './march-routing.module';

import { MarchPage } from './march.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MarchPage]
})
export class MarchPageModule {}
