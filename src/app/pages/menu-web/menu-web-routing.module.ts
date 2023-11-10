import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuWebPage } from './menu-web.page';

const routes: Routes = [
  {
    path: '',
    component: MenuWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuWebPageRoutingModule {}
