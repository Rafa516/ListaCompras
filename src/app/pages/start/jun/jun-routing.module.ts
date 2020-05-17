import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JunPage } from './jun.page';

const routes: Routes = [
  {
    path: '',
    component: JunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JunPageRoutingModule {}
