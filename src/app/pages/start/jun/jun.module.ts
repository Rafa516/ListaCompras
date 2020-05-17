import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunPageRoutingModule } from './jun-routing.module';

import { JunPage } from './jun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JunPage]
})
export class JunPageModule {}
