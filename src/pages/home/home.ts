import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', // <page-home></page-home>
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  items: Array<string>; // ['a', 'b', 'c']
  users: Array<{ id: number, name: string, email: string }>;
  // [{id: 1, name: 'xxx', email: 'xx@gmail.com'}]

  constructor(public navCtrl: NavController) {
    this.name = 'Ionic';
    this.items = ['Apple', 'Banana', 'Orange'];
    this.users = [
      { id: 1, name: 'Bill Gate', email: 'bill@gmail.com' },
      { id: 2, name: 'John Doe', email: 'john@gmail.com' },
    ]
  }

  itemSelected(item) {
    alert(item);
  }

}
