import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  @Input() name = '';
  @Input() price = 0;
  @Input() quantity = 0;

  get total() {
    return this.price * this.quantity;
  }
}
