import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import {BloglistService} from './bloglist.service';
import {HttpModule} from '@angular/http';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-page/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [BloglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }




/*{
  "blogs":
  {
    "id": "blogid",
    "title": "Cricket",
    "about": "The new era cricket",
    "userid" : "admin",
    "password" : "admin",

    "users" : [
      {
        "id": "user1",
        "name": "Prerit",
        "username": "user1",
        "password": "user1",
        "favouritePosts": ["post1"]
      },
      {
        "id": "user2",
        "name": "Sachin",
        "username": "user2",
        "password": "user2",
        "favouritePosts": ["post2"]
      }
    ],

    "blogPosts" : [
      {
        "id" : "post1",
        "title" : "My first post",
        "content" : "This is my first post of the blog"
      },
      {
        "id" : "post2",
        "title" : "My second post",
        "content" : "This is my second post of the blog"
      }
    ]
  }
}*/
