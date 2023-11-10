import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';

import { NotificacionesPage } from './notificaciones.page';
import { HeaderNotifComponent } from 'src/app/componentes/header-notif/header-notif.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [NotificacionesPage, HeaderNotifComponent]
})
export class NotificacionesPageModule {}
