import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="addValueForParent()">Add</button>
    <button (click)="subValueForParent()">Sub</button>
  `,
})
export default class ChildComponent {
  @Output() myClick = new EventEmitter<boolean>();

  addValueForParent() {
    this.myClick.emit(true);
  }
  subValueForParent() {
    this.myClick.emit(false);
  }
}
