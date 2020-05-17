import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarchPage } from './march.page';

const routes: Routes = [
  {
    path: '',
    component: MarchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarchPageRoutingModule {}
