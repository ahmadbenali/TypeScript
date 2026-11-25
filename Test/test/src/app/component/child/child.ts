import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  // Parent -> Child
  @Input() userName = '';

  // Child -> Parent
  @Output() liked = new EventEmitter<string>();

  onLike() {
    this.liked.emit(`${this.userName} was liked!`);
  }
}
