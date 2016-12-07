import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Users {

  constructor(public http: Http, @Inject('API_URL') private url: string) {
    console.log('Hello Users Provider');
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/users`)
      // this.http.get(this.url + '/users')
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
      this.http.get(`${this.url}/users/${id}`)
      //this.http.get(this.url + '/users/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

}
