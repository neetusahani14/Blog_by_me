import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SingleCategory } from './pages/single-category/single-category';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';
import { TermsAndConditions } from './pages/terms-and-conditions/terms-and-conditions';
import { SinglePost } from './pages/single-post/single-post';

export const routes: Routes = [
    {path: '', component:Home},
    {path:'category', component:SingleCategory},
    {path:'about', component:AboutUs},
    {path:'contact', component:ContactUs},
    {path:'term-conditions', component:TermsAndConditions},
    {path:'post',component:SinglePost},
];
