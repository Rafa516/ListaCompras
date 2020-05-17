import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctPageRoutingModule } from './oct-routing.module';

import { OctPage } from './oct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OctPage]
})
export class OctPageModule {}
