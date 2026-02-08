import { Component } from '@angular/core';
import { CategoryList } from '../../services/category-list';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './category-navbar.html',
  styleUrl: './category-navbar.css',
})
export class CategoryNavbar {

  categoryArray: any[] = [];  
  constructor(private categoryListService: CategoryList) {}

  ngOnInit(): void {  
    this.categoryListService.loadData().subscribe(categories => {
      console.log(categories); // Log the categories to the console
      this.categoryArray = categories;
    });
  }

}
