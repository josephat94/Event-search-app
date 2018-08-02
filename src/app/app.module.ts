import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalleEspacioPage } from '../pages/detalle-espacio/detalle-espacio';
import { SettingsPage } from '../pages/settings/settings';
import { ModalCommentsPage } from '../pages/modal-comments/modal-comments';
import { ReservacionesPage } from '../pages/detalle-espacio/Reservaciones/Reservaciones-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage, DetalleEspacioPage,SettingsPage,ModalCommentsPage, ReservacionesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,SettingsPage, ReservacionesPage,
    HomePage, DetalleEspacioPage, ModalCommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
