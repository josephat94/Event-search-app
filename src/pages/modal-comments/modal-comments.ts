import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-comments',
  templateUrl: 'modal-comments.html',
})
export class ModalCommentsPage {

  Comments:any[]= [
   {comentario: "Esta muy padre el lugar 100% recomendado",
    usuario: "Ana Perez L.",
    fecha: "25-10-17",},
    {comentario: "Me gusto mucho te atienden muy bien",
    usuario: "Rual Reyes L.",
    fecha: "25-06-18",},
    {comentario: "Todo muy ordenado lo recomiendo",
    usuario: "Ana Perez L.",
    fecha: "25-10-17",},
    {comentario: "Un poco distraido el en cargado no lo recomiendo tanto",
    usuario: "Luis Angel Mendez.",
    fecha: "25-10-17",},
    {comentario: "Excelente servicio y excelente lugar",
    usuario: "Sergio Bahena.",
    fecha: "25-10-17",},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCommentsPage');
  }
  closeModal(){
this.viewCtrl.dismiss();
  }
}
