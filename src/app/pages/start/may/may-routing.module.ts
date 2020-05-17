import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayPage } from './may.page';

const routes: Routes = [
  {
    path: '',
    component: MayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayPageRoutingModule {}
