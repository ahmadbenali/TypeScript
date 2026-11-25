import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShopTask2');

   productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  productAvailable = signal(true);

  cartName = signal('');
  cartPrice = signal(0);
  cartQuantity = signal(0);

  onAddToCart(item: { name: string; quantity: number }) {
    this.cartName.set(item.name);
    this.cartQuantity.set(item.quantity);
    this.cartPrice.set(this.productPrice());
  }

 
  showHeadphones() {
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.productAvailable.set(true);
  }
}
