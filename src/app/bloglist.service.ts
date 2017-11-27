import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const BLOGS_URL = 'http://localhost:3000/blogs/';
const USERS_URL = 'http://localhost:3000/users/';
const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class BloglistService {
  userdata: Object = {};

  constructor(private http: Http) { }
  // data transfer between components
  setLoginDetails(data) {
    this.userdata = data;
  }

  getLoginDetails() {
    return this.userdata;
  }
  // db functions
  loadBlogsData() {
    return this.http.get(BLOGS_URL)
      .map(res => res.json());
  }
  loadUsersData() {
    return this.http.get(USERS_URL)
      .map(res => res.json());
  }

  postBlogData(data) {
    return this.http.post(BLOGS_URL, data, header)
      .map(res => res.json());
  }

  postUserData(data) {
    return this.http.post(USERS_URL, data, header)
      .map(res => res.json());
  }

  updateData(data) {
    return this.http.patch(`BLOGS_URL${data.id}`, data, header)
      .map(res => res.json());
  }

  checkData(data) {
    return data.id ? this.updateData(data) : this.postUserData(data)
      .map(res => res.json());
  }

}
