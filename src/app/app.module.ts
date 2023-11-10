import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule,BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, HttpClientModule, QRCodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
