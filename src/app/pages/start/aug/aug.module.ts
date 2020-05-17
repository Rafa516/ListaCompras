import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AugPageRoutingModule } from './aug-routing.module';

import { AugPage } from './aug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AugPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AugPage]
})
export class AugPageModule {}
