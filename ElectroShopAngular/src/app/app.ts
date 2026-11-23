import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');

  constructor() {
    this.calculateStoreSummary();
  }
  
  storeName: string ="ElectroShop";
  storeDescription: string = "Your favorite electronics store";
  storeAddress: string = "Amman, Jordan";
  totalProducts: number = 5; 
  isStoreopen: boolean = true;
  currency: string = "USD";

  productNames: string[] = ["Laptop", "Smartphone", "Headphones", "Smart Watch", "Keyboard"]
  productPrices: number[] = [750, 450, 80, 120, 45];

  mostExpensive: number = 0;
  cheapest: number = 0;
  totalValue: number = 0;

  featuredProduct: {name:string, price:number, decr:string}={
  name: "Bob",
  price: 30,
  decr: "very good"
  };

  get storeStatusMessage(): string {
    if (this.isStoreopen) {
      return 'We Are Open';
    } else {
      return 'We Are Closed';
    }
  }

  get calculateFinalPrice(): number {
    
    if (10 > 0) {
      const discountAmount = this.productPrices[0] * (10 / 100);
      return this.productPrices[0] - discountAmount;
    } else {
      return this.productPrices[0]; 
    }
  }

  calculateStoreSummary(): void {
    
    this.totalProducts = this.productNames.length;

    
    if (this.totalProducts === 0) return;

    
    this.mostExpensive = this.productPrices[0];
    this.cheapest = this.productPrices[0];

    
    this.totalValue = 0;

    
    for (let i = 0; i < this.productNames.length; i++) {
      const currentPrice = this.productPrices[i];

      
      this.totalValue += currentPrice;

      
      if (currentPrice > this.mostExpensive) {
        this.mostExpensive = currentPrice;
      }

  
      if (currentPrice < this.cheapest) {
        this.cheapest = currentPrice;
      }
    }
  }

}
