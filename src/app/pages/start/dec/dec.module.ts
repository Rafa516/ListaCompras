import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecPageRoutingModule } from './dec-routing.module';

import { DecPage } from './dec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecPageRoutingModule,
    ComponentsModule

  ],
  declarations: [DecPage]
})
export class DecPageModule {}
