import { Component } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent {
  arrPeople = [
    {name: 'Dong', age: 25},
    {name: 'Nam', age: 22},
    {name: 'Doai', age: 30}
  ]

  handleRemovePerson(name: string) {
    const index = this.arrPeople.findIndex(person => person.name === name);
    this.arrPeople.splice(index, 1);
  }
}
