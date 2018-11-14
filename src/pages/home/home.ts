import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  constructor(public navCtrl: NavController) {}
    login() {
                  
             this.navCtrl.push(InicioPage);
           
           }

  }


