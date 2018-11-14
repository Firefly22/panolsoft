import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Calendar } from '@ionic-native/calendar';
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

 constructor(public navCtrl: NavController, public navParams: NavParams) {}

 /*constructor(private calendar: Calendar){}

  calendario(){
    this.calendar.createCalendar('MyCalendar').then(
  
  (msg) => {console.log(msg);
  (err) => {console.log(err);
  }}
    ); }

*/
 ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
