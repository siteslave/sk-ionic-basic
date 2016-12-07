import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';

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
    private loadingCtrl: LoadingController
  ) {
    this.name = 'Ionic';
    this.items = ['Apple', 'Banana', 'Orange'];
  }

  ionViewWillEnter() {
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

  itemSelected(id: number) {
    this.navCtrl.push(DetailPage, {id: id});
    // this.navCtrl.push(DetailPage, { name: xxx, id: 123 });
  }

  goAddPage() {
    this.navCtrl.push(AddPage);
  }

}
