import { Component } from '@angular/core';
import { Camera, CameraOptions } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  base64Image: any;

  constructor(public navCtrl: NavController) {

  }

  takePicture() {
    let options: CameraOptions = {
      quality: 60,
      destinationType: 0,
      sourceType: 1
    };

    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  takePicture2() {
    let options: CameraOptions = {
      quality: 60,
      destinationType: 0,
      sourceType: 0
    };

    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}
