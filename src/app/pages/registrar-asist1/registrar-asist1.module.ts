import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAsist1PageRoutingModule } from './registrar-asist1-routing.module';

import { RegistrarAsist1Page } from './registrar-asist1.page';
import { HeaderReg1Component } from 'src/app/componentes/header-reg1/header-reg1.component';
import { CameraConfirmComponent } from 'src/app/componentes/camera-confirm/camera-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAsist1PageRoutingModule
  ],
  declarations: [RegistrarAsist1Page, HeaderReg1Component, CameraConfirmComponent]
})
export class RegistrarAsist1PageModule {}
