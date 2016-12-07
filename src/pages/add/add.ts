import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { IUser, IGroup, IHttpResult } from '../../models';
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  groups: Array<IGroup>;

  username: string;
  name: string;
  email: string;
  group_id: string;

  constructor(
    public navCtrl: NavController,
    private userProvider: Users,
    private loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {
    this.userProvider.getGroups()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.groups = data.groups;
        }
      }, (err) => {
      
      });
  }

  save() {

     let loading = this.loadingCtrl.create({
      content: 'Saving...'
    });

     loading.present();
    
    this.userProvider.save(this.username, this.name, this.email, this.group_id)
      .then((data: IHttpResult) => {
        if (data.ok) {
          loading.dismiss();
          this.navCtrl.pop();
        }
      }, (err) => {
        loading.dismiss();
      });
  }

}
