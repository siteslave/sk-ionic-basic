import { Component } from '@angular/core';

import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';
import { LoginPage } from '../login/login';

import { Users } from '../../providers/users';
import { IUser, IHttpResult } from '../../models';

@Component({
  selector: 'page-home', // <page-home></page-home>
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  items: Array<string>; // ['a', 'b', 'c']
  users: Array<IUser>;

  constructor(
    public navCtrl: NavController,
    private userProvider: Users,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform,
    private alertCtrl: AlertController
  ) {
    this.name = 'Ionic';
    this.items = ['Apple', 'Banana', 'Orange'];
  }

  getUsers() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.userProvider.getUsers()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.users = data.rows;
        }
        loading.dismiss();
      }, (err) => {
        loading.dismiss();
        console.error(err);
      });
  }  

  doRefresh(refresher) {
    this.userProvider.getUsers()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.users = data.rows;
        }
        refresher.complete();
      }, (err) => {
        refresher.complete();
        console.error(err);
      });
  }

  ionViewWillEnter() {
    this.getUsers();
  }

  itemSelected(id: number) {
    this.navCtrl.push(DetailPage, {id: id});
    // this.navCtrl.push(DetailPage, { name: xxx, id: 123 });
  }

  goAddPage() {
    this.navCtrl.push(AddPage);
  }

  showConfirm(id: number) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'คุณต้องการลบรายการนี้ ใช่หรือไม่?',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.userProvider.removeUser(id)
              .then((data: IHttpResult) => {
                this.getUsers();
              }, (err) => {
              
              });
          }
        }
      ]
    });
    confirm.present();
  }  

  presentActionSheet(id: number) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.showConfirm(id);
          }
        },{
          text: 'Detail',
          handler: () => {
            this.navCtrl.push(DetailPage, {id: id});
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  logout() {
    localStorage.removeItem('fullname');
    this.navCtrl.setRoot(LoginPage);
  }

}
