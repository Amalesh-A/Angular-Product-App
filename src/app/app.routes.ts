import { Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
