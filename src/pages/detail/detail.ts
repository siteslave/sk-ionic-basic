import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  name: string;
  email: string;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
  }

  ionViewWillEnter() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);

    console.log('Hello DetailPage Page');
  }

}
