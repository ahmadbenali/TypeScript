import { Component, signal ,  EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
 @Input() name = '';
  @Input() description = '';
  @Input() price = 0;
  @Input() isAvailable = true;

  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();

  quantity = signal(1);

  increase() {
    this.quantity.update((q) => q + 1);
  }

  decrease() {
    this.quantity.update((q) => (q > 1 ? q - 1 : 1));
  }

  add() {
    this.addToCart.emit({ name: this.name, quantity: this.quantity() });
  }
}
