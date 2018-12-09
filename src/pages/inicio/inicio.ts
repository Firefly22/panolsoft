import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Calendar } from '@ionic-native/calendar';
import { GmaterialesPage } from '../gmateriales/gmateriales';
import { CalendarioPage } from '../calendario/calendario';
//import { CalendarioPage } from '../calendario/calendario';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  Nombre: String;
  NombreMaterial: String;
  FechaSolicitud: String;
  FechaDevolucion: String;



 constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.Nombre='Camila Astorga';
  this.NombreMaterial='Martillo';
  this.FechaSolicitud='10/11/2018';
  this.FechaDevolucion='15/11/2018';

 }
  GestionarMaterial() {
                    
    this.navCtrl.push(GmaterialesPage);

  }

 

  calendario(){
    this.navCtrl.push(CalendarioPage);
   /* this.calendar.createCalendar('MyCalendar').then(
      (msg) => {console.log(msg);
      (err) => {console.log(err);
      }}
    );*/
    
    
   }


 ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}


/*
Para hacer el listado de los materaiales con fotos
<ion-list>
  <ion-item>
    <ion-thumbnail item-start>
      <img src="img/thumbnail-totoro.png">
    </ion-thumbnail>
    <h2>My Neighbor Totoro</h2>
    <p>Hayao Miyazaki • 1988</p>
    <button ion-button clear item-end>View</button>
  </ion-item>
</ion-list>
*/