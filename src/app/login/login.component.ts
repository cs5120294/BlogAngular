import { Component, OnInit } from '@angular/core';
import {BloglistService} from '../bloglist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Object [];
  successful = false;
  passwordMatch = true;
  userMatch = true;
  usernameMatch = false;
  confirmPasswordMatch = true;
  login(username, password) {
    let obj = this.users.find(o => o['username'] === username);
    if (obj == null) {
      this.userMatch = false;
    } else {
      if (obj['password'] === password) {
        this.successful = true;
        sessionStorage.setItem('currentUser', JSON.stringify(obj));
        this.router.navigate(['blogs']);
        // this.service.setLoginDetails(this.);
      } else {
        this.passwordMatch = false;
      }
    }
  }

  signup(name, username, password, confirmPassword) {
    let obj = this.users.find(o => o['username'] === username);
    if (obj != null) {
      this.usernameMatch = true;
    } else {
      this.usernameMatch = false;
      if (password !== confirmPassword) {
        this.confirmPasswordMatch = false;
      } else {
        this.confirmPasswordMatch = true;
        let user = {
          id: 'user' + (this.users.length + 1),
          name: name,
          username: username,
          password: password,
          favouritePosts: []
        };
        this.service.postUserData(user)
          .subscribe(data => {
            this.users.push(data);
            // this.router.navigate(['']);
          });
        return true;
      }
    }
    return false;
  }

  constructor(private service: BloglistService, private router: Router) { }

  ngOnInit() {
    // sessionStorage.clear();
    this.service.loadUsersData()
      .subscribe((data) => {
        this.users = data;
      });
  }

}
