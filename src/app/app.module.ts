import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { FeedsModule } from '../pages/feeds/feeds.module';
import { YoutubeModule } from '../pages/youtube/youtube.module';
import { AboutModule } from '../pages/about/about.module';
import { ContactModule } from '../pages/contact/contact.module';
import { LoginModule } from '../pages/login/login.module';
import { ChartsModule } from '../pages/charts/charts.module';
import { WelcomeModule } from '../pages/welcome/welcome.module';
import { SignupModule } from '../pages/signup/signup.module';
import { FoodintakeModule } from '../pages/foodintake/foodintake.module'


import { FoodintakeProvider } from '../providers/foodintake/foodintake';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SharedModule,
    HttpModule,
    HomeModule,
    TabsModule,
    GoogleMapsModule,
    FeedsModule,
    YoutubeModule,
    AboutModule,
    ContactModule,
    LoginModule,
    ChartsModule,
    WelcomeModule,
    FoodintakeModule,
    SignupModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodintakeProvider]
})
export class AppModule {}
