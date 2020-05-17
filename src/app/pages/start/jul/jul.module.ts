import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JulPageRoutingModule } from './jul-routing.module';

import { JulPage } from './jul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JulPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JulPage]
})
export class JulPageModule {}
