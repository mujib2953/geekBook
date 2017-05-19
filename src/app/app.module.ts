import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SubHome } from '../pages/sub-home/sub-home';
import { MathsPage } from '../pages/maths-page/maths-page';
import { IndicesAlgPage } from '../pages/indices-alg-page/indices-alg-page';
import { SharedService } from '../providers/shared-service';

import { BgComponent } from '../components/bg-component/bg-component';

@NgModule({
  declarations: [
    MyApp,
    BgComponent,
    HomePage,
    SubHome,
    MathsPage,
    IndicesAlgPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubHome,
    MathsPage,
    IndicesAlgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedService
  ]
})
export class AppModule {}
