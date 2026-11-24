import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
    productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'https://picsum.photos/id/0/400/300';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;
}
