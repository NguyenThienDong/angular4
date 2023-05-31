import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() name: string | undefined;
  @Input() age: Number | String | undefined;
  @Output() removePerson = new EventEmitter<string>();

  removePersonByName() {
    this.removePerson.emit(this.name || '')
  }
}
