import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovPageRoutingModule } from './nov-routing.module';

import { NovPage } from './nov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NovPage]
})
export class NovPageModule {}
