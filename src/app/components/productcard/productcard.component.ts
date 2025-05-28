import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  @Input() product!: {id: number, name: string, price: number, description: string};
  @Output() viewProduct = new EventEmitter<number>();

  onViewProduct() {
    this.viewProduct.emit(this.product.id);
  }
}
