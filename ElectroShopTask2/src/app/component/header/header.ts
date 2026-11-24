import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
 
  name:string = "Apple store";
  welcome:string = "Welcome to our store";
  log:string = "Everything You Need in One Place"

}
