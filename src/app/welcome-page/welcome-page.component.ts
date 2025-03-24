import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuStateService } from '../shared/menu-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})

export class WelcomePageComponent {
  categories = Array.from({ length: 20 }, (_, i) => `Category ${i + 1}`); // Definir 20 categorías
  isMenuOpen = false;

  constructor(private menuStateService: MenuStateService) {
    // Suscribirse al estado del menú
    this.menuStateService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }
}
