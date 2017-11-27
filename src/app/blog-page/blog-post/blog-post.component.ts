import { Component, OnInit, Input } from '@angular/core';
import {BloglistService} from '../../bloglist.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit {
  @Input('blogpost') blogPost;
  users: Object[];
  currentUser: Object;


  findAuthor(id: number) {
    let obj = this.users[id];
    return obj['name'];
  }

  markFavourite(id: number) {
    let favourites = this.currentUser['favouritePosts'];
    let index = favourites.indexOf(id);
    if (index > -1) {
      favourites.splice(index, 1);
    } else {
      favourites.push(id);
    }
  }

  constructor(private service: BloglistService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.service.loadUsersData()
      .subscribe((data) => {
        this.users = data;
      });
  }
}
