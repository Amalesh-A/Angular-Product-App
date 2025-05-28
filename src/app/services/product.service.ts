import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {id: 1, name: 'Product 1', price: 100, description: 'This is the first product'},
    {id: 2, name: 'Product 2', price: 200, description: 'This is the second product'},
    {id: 3, name: 'Product 3', price: 300, description: 'This is the third product'},
    {id: 4, name: 'Product 4', price: 400, description: 'This is the fourth product'},
    {id: 5, name: 'Product 5', price: 500, description: 'This is the fifth product'},
  ];
  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  //constructor() { }
}
