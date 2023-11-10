import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerWebPageRoutingModule } from './restablecer-web-routing.module';

import { RestablecerWebPage } from './restablecer-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerWebPageRoutingModule
  ],
  declarations: [RestablecerWebPage]
})
export class RestablecerWebPageModule {}
