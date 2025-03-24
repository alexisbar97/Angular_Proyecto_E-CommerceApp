// category-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuStateService } from '../shared/menu-state.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule, RouterModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  categoryId: string | null = null;
  isMenuOpen = false;
  categories = Array.from({ length: 20 }, (_, i) => `Category ${i + 1}`);

  constructor(
    private route: ActivatedRoute,
    private menuStateService: MenuStateService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
    });

    this.menuStateService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  toggleMenu() {
    this.menuStateService.toggleMenu();
  }
}
