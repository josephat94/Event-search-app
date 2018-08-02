import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalCommentsPage } from '../modal-comments/modal-comments';
import { ReservacionesPage } from './Reservaciones/Reservaciones-page';

/**
 * Generated class for the DetalleEspacioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-espacio',
  templateUrl: 'detalle-espacio.html',
})
export class DetalleEspacioPage {
Espacio:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public modalCtrl: ModalController
  ) {
this.Espacio= navParams.get("Espacio");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleEspacioPage');
  }


  AbrirModal(){
let modal= this.modalCtrl.create(ModalCommentsPage);

modal.present();

  }

  EnviarReservaciones(){

    this.navCtrl.push(ReservacionesPage);
  }
}
