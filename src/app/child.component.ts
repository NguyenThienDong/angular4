import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `
        <button (click)="addValueForParent()">Add</button>
    `
})

export default class ChildComponent {
    @Output() myClick = new EventEmitter();

    addValueForParent () {
        this.myClick.emit();
    }
}