import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Users {

  constructor(public http: Http) {
    console.log('Hello Users Provider');
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('http://192.168.3.181:3000/users')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

  getDetail(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get('http://192.168.3.181:3000/users/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

}
