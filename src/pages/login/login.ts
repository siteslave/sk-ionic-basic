import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { IHttpResult } from '../../models';
import { Users } from '../../providers/users';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private userProvider: Users,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    this.userProvider.login(this.username, this.password)
      .then((data: IHttpResult) => {
        if (data.ok) {
          localStorage.setItem('fullname', data.fullname);
          let alert = this.alertCtrl.create({
            title: 'Welcome!',
            subTitle: 'สวัสดี, ' + data.fullname,
            buttons: ['ตกลง']
          });
          alert.present();
          this.navCtrl.setRoot(TabsPage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: JSON.stringify(data.msg),
            buttons: ['ตกลง']
          });
          alert.present();
        }
      }, (err) => {
        console.error(err);
    })
  }  
}
