import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-reservaciones',
  templateUrl: 'Reservaciones-Page.html'
})
export class ReservacionesPage {
Meses:any[]= [
  {Mes:"Enero", dias: this.llenar(31,"Enero")},  {Mes:"Febrero", dias:this.llenar(30,"Febrero")},  {Mes:"Marzo", dias: this.llenar(31,"Marzo")},  {Mes:"Abril", dias:this.llenar(30,"Abril")},  {Mes:"Mayo",dias: this.llenar(31,"Mayo")},
  {Mes:"Junio", dias:this.llenar(30,"Junio")},  {Mes:"Julio", dias: this.llenar(31,"Julio")},  {Mes:"Agosto", dias: this.llenar(31,"Agosto")},  {Mes:"Septiembre", dias:this.llenar(30,"Septiembre")},  {Mes:"Octubre",dias: this.llenar(31,"Octubre")},
  {Mes:"Noviembre", dias:this.llenar(30,"Noviembre")},   {Mes:"Diciembre", dias:this.llenar(31,"Diciembre")}
]
MesSeleecionado=0;

llenar(dias, mes){

let i =0;
let arre= [];
let objeto: any;
while(i<dias){
let reservacion=false;
  if(i==mes.length || i == ((mes.length)-2)){
    reservacion=true;
  }
objeto={dia: i+1, mes:"mes", reservacion:reservacion}
arre.push(objeto);
i=i+1;
}

return arre;


}
  constructor(public navCtrl: NavController) {

  }


  anteriorMes(){
if(this.MesSeleecionado>0){
  this.MesSeleecionado=this.MesSeleecionado-1;

}else{

  this.MesSeleecionado=11;
}
   
        
      }
  siguienteMes(){
if(this.MesSeleecionado<11){
  this.MesSeleecionado=this.MesSeleecionado+1;

}else{

  this.MesSeleecionado=0;
}

    
  }

}
