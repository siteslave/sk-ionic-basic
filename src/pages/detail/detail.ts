import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { IUser, IHttpResult } from '../../models';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  username: string;
  email: string;
  name: string;
  id: number;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private userProvider: Users
  ) {
    this.id = this.navParams.get('id');
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.userProvider.getDetail(this.id)
      .then((data: IHttpResult) => { 
        if (data.ok) {
          let user = <IUser>data.user;
          this.username = user.username;
          this.email = user.email;
          this.name = user.name;
        }
        loading.dismiss();
      }, (err) => {
        loading.dismiss();
        console.error(err);
       });
  }

}
