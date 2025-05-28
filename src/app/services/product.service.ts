import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {id: 1, name: 'Product 1', price: 100, description: 'This is the first product', link: 'https://www.link1.com'},
    {id: 2, name: 'Product 2', price: 200, description: 'This is the second product', link: 'https://www.link2.com'},
    {id: 3, name: 'Product 3', price: 300, description: 'This is the third product', link: 'https://www.link3.com'},
    {id: 4, name: 'Product 4', price: 400, description: 'This is the fourth product', link: 'https://www.link4.com'},
    {id: 5, name: 'Product 5', price: 500, description: 'This is the fifth product', link: 'https://www.link5.com'},
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
