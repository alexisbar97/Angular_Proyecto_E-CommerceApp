// app.routes.ts
import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyPurchasesPageComponent } from './my-purchases-page/my-purchases-page.component';
import { MyLikesPageComponent } from './my-likes-page/my-likes-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent }, // Ruta principal
  { path: 'category/:id', component: CategoryPageComponent }, // Ruta de categorías
  { path: 'login', component: LoginPageComponent }, // Ruta de login
  { path: 'my-purchases', component: MyPurchasesPageComponent }, // Ruta de mis compras
  { path: 'my-likes', component: MyLikesPageComponent }, // Ruta de mis favoritos
  { path: 'cart', component: CartPageComponent }, // Ruta del carrito
];
