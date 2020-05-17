import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptPage } from './sept.page';

const routes: Routes = [
  {
    path: '',
    component: SeptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeptPageRoutingModule {}
