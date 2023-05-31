import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  template: `<h3>{{ data | json }}</h3>`,
})
export default class IpComponent {
  data: any = {};

  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .toPromise()
      .then((res) => this.data = res)
      .catch(err => console.log(err))
  }
}
