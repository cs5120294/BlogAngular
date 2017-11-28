import { Component, OnInit, Input } from '@angular/core';
import {BloglistService} from '../../bloglist.service';
import {Router} from '@angular/router';

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

  deletePost(id) {
    this.service.deleteBlog(id)
      .subscribe((data) => {
        this.blogPost = null;
        // this.router.navigate(['blogs']);
      });
  }

  markFavourite(id: number) {
    let favourites = this.currentUser['favouritePosts'];
    let index = favourites.indexOf(id);
    if (index > -1) {
      favourites.splice(index, 1);

    } else {
      favourites.push(id);
    }
    let fav = {
      favouritePosts: favourites
    };
    this.service.updateFavourites(fav, this.currentUser['id'])
      .subscribe(data => {
        this.currentUser = data;
      });
  }

  constructor(private service: BloglistService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.service.loadUsersData()
      .subscribe((data) => {
        this.users = data;
      });
  }
}
