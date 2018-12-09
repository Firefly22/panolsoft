import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar/ngx';

//import { Calendar } from '@ionic-native/calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { GmaterialesPage } from '../pages/gmateriales/gmateriales';
import { CalendarioPage } from '../pages/calendario/calendario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    GmaterialesPage,
    CalendarioPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    GmaterialesPage,
    CalendarioPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
  
})
export class AppModule {}
