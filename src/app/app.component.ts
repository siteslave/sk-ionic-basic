import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;  

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.backgroundColorByHexString('#009688');
      Splashscreen.hide();

      let fullname = localStorage.getItem('fullname');

      if (fullname) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
      
    });
  }
}
