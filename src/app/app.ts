import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Layouts/header/header";
import { CategoryNavbar } from './Layouts/category-navbar/category-navbar';
import { Footer } from './Layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CategoryNavbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Blog_by_me');
}
