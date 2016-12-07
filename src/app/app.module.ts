import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { SettingPage } from '../pages/setting/setting';
import { DetailPage } from '../pages/detail/detail';
import { Users } from '../providers/users';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage, 
    DetailPage
  ],
  providers: [
    Users,
    { provide: 'API_URL', useValue: 'http://192.168.3.181:3000'},
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
