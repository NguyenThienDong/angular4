import { Component, ViewChild } from '@angular/core';
import ChildComponent from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <!-- <button (click)="child.value = child.value + 1">Add value of child (Cach 1)</button> -->
    <!-- <app-child #child></app-child> -->
    <button (click)="handleAddValueChild()">Add value of child (Cach 2 dung ViewChild)</button>
    <app-child></app-child>
  `,
})
export default class ParentComponent {
  @ViewChild(ChildComponent, { static: false}) childTwo: any;

  handleAddValueChild() {
    this.childTwo.value++;
  }
}
