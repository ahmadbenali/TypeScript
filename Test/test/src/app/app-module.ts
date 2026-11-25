import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './component/header/header';
import { Homepage } from './homepage/homepage';
import { Button } from './button/button';
import { Parent } from './component/parent/parent';
import { Child } from './component/child/child';
import { Basic } from './component/basic/basic';
import { Counter } from './component/counter/counter';

@NgModule({
  declarations: [App, Header, Homepage, Button, Parent, Child, Basic, Counter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
