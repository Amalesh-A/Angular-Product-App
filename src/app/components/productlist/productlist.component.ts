import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  standalone: true,
  imports: [CommonModule, ProductcardComponent]
})
export class ProductlistComponent {
  products: any[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  handleViewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}