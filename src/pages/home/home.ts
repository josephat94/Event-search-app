import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleEspacioPage } from '../detalle-espacio/detalle-espacio';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Espacio:any= {
    nombre: "Jardin Diamante",
    municipio: "Jiutepec",
    estado: "Morelos",
    precioInicial: "10,000",
    descripcion: "CASA EN ESQUINA EN CONDOMINIO RESIDENCIAL CON VIGILANCIA, MODERNO CUERNAVACA CALIFORNIANO, 4 RECAMARAS, UNA EN PLANTA BAJA, ZONA NORTE, NO ESTA AL 100%, NO ESTA EN RUINAS, 2 NIVELES, ÁREAS COMUNES PARA SOLO 10 CASAS, 3 CANCHAS DE TENIS PROFESIONALES, "   , 
  }
  DetalleEspacio: DetalleEspacioPage;
Espacios:any[]= [{valor: 1, key:1},{valor:2, key: 2}];
  constructor(public navCtrl: NavController) {

  }
  EnviarDetalle(){


    this.navCtrl.push(DetalleEspacioPage, {"Espacio":this.Espacio });
  }

  EnviarToOptions(){

    this.navCtrl.push(SettingsPage);
  }
}
