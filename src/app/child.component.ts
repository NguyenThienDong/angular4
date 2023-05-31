import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <h3>{{ value }}</h3> `,
})
export default class ChildComponent {
  value = 0;
}
