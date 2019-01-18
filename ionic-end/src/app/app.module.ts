import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Routes} from "@angular/router";
import { BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import { NgxQRCodeModule} from "ngx-qrcode2";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HTTP } from '@ionic-native/http/ngx'

import { ExtRegisterPage } from './ext-register/ext-register.page';

import {ExtinguisherService} from "./ext-register/extinguisher.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const routes: Routes=[
    {path: 'ext-register', component: ExtRegisterPage}
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, NgxQRCodeModule],
  providers: [
    StatusBar,
    SplashScreen,
      ExtinguisherService,
      BarcodeScanner,
      Camera,
      HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
