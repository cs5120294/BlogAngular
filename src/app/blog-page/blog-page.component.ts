import { Component, OnInit } from '@angular/core';
import {BloglistService} from '../bloglist.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blogs: Object[];
  currentUser: Object = {};

  test() {
    console.log('clicked');
  }

  signout() {
    sessionStorage.clear();
  }

  constructor(private service: BloglistService) {}

  ngOnInit() {
    this.service.loadBlogsData()
      .subscribe((data) => {
        this.blogs = data;
      });
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }
}
