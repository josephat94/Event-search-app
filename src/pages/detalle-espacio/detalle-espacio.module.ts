import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleEspacioPage } from './detalle-espacio';

@NgModule({
  declarations: [
    DetalleEspacioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleEspacioPage),
  ],
})
export class DetalleEspacioPageModule {}
