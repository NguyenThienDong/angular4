import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  name = '';
  isHightlight = false;
  evenStyle = { color: 'red', fontSize: '40px'};
  oddStyle = { color: 'black', fontSize: '20px'};
  currentClass = { circle: this.isHightlight, square: !this.isHightlight };
}
