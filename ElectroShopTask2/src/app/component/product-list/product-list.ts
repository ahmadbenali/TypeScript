import { Component } from '@angular/core';


interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  availability: string;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  products: Product[] = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'https://picsum.photos/id/0/300/200',
      availability: 'Available'
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://picsum.photos/id/160/300/200',
      availability: 'Available'
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'https://picsum.photos/id/10/300/200',
      availability: 'Available'
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'https://picsum.photos/id/20/300/200',
      availability: 'Available'
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://picsum.photos/id/30/300/200',
      availability: 'Unavailable'
    }
  ];

  buyNow(productName: string): void {
    alert('You clicked Buy Now for: ' + productName);
  }
}
