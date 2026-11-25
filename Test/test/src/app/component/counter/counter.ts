import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  increment() {
    this.valueChange.emit(this.value + 1);
  }
}
