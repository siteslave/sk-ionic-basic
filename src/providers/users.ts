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

  save(username: string, name: string, email: string, group_id: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { username: username, name: name, email: email, group_id: group_id };

      this.http.post(`${this.url}/users`, body, options)
      // this.http.get(this.url + '/users')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

  getGroups() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/groups`)
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

  removeUser(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/users/${id}`)
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
