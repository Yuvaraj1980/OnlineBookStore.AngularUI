import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: Routes = [ 
  {    
    path: '', 
    component : LoginComponent
  },
  {
    path: 'books',
    component : BooksComponent
  },
  {
    path: 'orders',
    component : OrdersComponent
  },
  {
    path: '**',
    component : PagenotfoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);