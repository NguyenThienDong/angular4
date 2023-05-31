import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  template: `<h3>{{ data | json }}</h3>`,
  providers: [IpService]
})
export default class IpComponent {
  data: any = {};

  constructor(private ipService: IpService) {
    this.ipService.getUsers().then(res => this.data = res)
  }
}
