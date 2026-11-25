import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './component/header/header';
import { Navbar } from './component/navbar/navbar';
import { ProductList } from './component/product-list/product-list';
import { ProductDetails } from './component/product-details/product-details';
import { Footer } from './component/footer/footer';
import { ShoppingCart } from './component/shopping-cart/shopping-cart';

@NgModule({
  declarations: [App, Header, Navbar, ProductList, ProductDetails, Footer, ShoppingCart],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
