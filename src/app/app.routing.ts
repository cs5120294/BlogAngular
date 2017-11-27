import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { BlogPageComponent} from './blog-page/blog-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'blogs',
    component: BlogPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
