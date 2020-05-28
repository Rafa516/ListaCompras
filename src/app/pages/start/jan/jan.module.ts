import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { JanPage } from './jan.page';

import { JanPageRoutingModule } from './jan-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanPageRoutingModule,
    ComponentsModule,
   
  ],
  declarations: [JanPage]
})
export class JanPageModule {}
