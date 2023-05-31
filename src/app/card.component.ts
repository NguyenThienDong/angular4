import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <!-- Hien thi neu ngcontent co class la card-header -->
        <ng-content select=".card-header"></ng-content> 
      </div>
      <div class="body">
        <ng-content select=".card-body"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        padding: 5px;
        margin: 5px;
        background-color: #fff;
        border-radius: 2px;
        display: inline-block;
        width: 400px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19) rgba(0, 0, 0, 0.23);
      }
    `,
  ],
})
export default class CardComponent {}
