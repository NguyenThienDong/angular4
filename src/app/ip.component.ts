import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  template: `<h3>{{ data | json }}</h3>`,
})
export default class IpComponent implements OnInit {
  data: any = {};
  constructor(private ipService: IpService) {}
  ngOnInit(): void {
    this.ipService.getUsers().then((res) => (this.data = res));
  }
}
