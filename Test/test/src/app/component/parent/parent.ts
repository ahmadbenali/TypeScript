import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  count = signal(0);
  name = signal('Ahmad');

  increment() {
    this.count.update((c) => c + 1);
  }

  reset() {
    this.count.set(0);
  }

  rename() {
    this.name.set('Angular Dev');
  }
}
