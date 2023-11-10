import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuWebPageRoutingModule } from './menu-web-routing.module';

import { MenuWebPage } from './menu-web.page';

import { LibreriaModule } from 'src/app/componentes/libreria/libreria.module';
@NgModule({
  imports: [
    LibreriaModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MenuWebPageRoutingModule
  ],
  declarations: [MenuWebPage]
})
export class MenuWebPageModule {}
