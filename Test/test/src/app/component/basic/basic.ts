import { Component, signal , Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic',
  standalone: false,
  styleUrl: './basic.css',
  templateUrl: './basic.html',
})
export class Basic {
  // count = signal(0);
  // name = signal('Ahmad');

  @Input() name=''
 @Output() liked = new EventEmitter<string>();

  onClick() {
    this.liked.emit('Post liked!');   // send data up
  }

  count: number = 0


  // increment() {
  //   this.count.update((c) => c + 1);
  // }

  increment() {
    this.count+=1;
  }

  // reset() {
  //   this.count.set(0);
  // }

  // rename() {
  //   this.name.set('Angular Dev');
  // }
}
