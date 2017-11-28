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
  category = 'allblogs';

  signout() {
    sessionStorage.clear();
  }

  postBlog(title, content, category) {
    let validPost = true;
    if (title === '' || content === '') {
      validPost = false;
    } else {
      let post = {
        id: new Date().getUTCMilliseconds(),
        title: title,
        content: content,
        category: category,
        author: this.currentUser['id']
      };
      this.service.postBlogData(post)
        .subscribe(data => {
          this.blogs.push(data);
        });
    }
  }

  matchCategory(blog) {
    if (this.category === 'allblogs') {
      return true;
    } else if (this.category === 'favourite' && this.currentUser['favouritePosts'].includes(blog.id)) {
      return true;
    } else if (this.category === 'personal' && this.currentUser['id'] === blog.author) {
      return true;
    } else if (this.category === 'sports' &&  blog.category === 'Sports') {
      return true;
    } else if (this.category === 'marketing' &&  blog.category === 'Marketing') {
      return true;
    } else if (this.category === 'education' &&  blog.category === 'Education') {
      return true;
    } else if (this.category === 'others' &&  blog.category === 'Other') {
      return true;
    }
    return false;
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
