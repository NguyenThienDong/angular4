import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-pipes',
  templateUrl: './learn-pipes.component.html',
  styleUrls: ['./learn-pipes.component.css']
})
export class LearnPipesComponent {
  birthday = new Date(1998, 3, 17);
  userInfo = {
    name: 'Nguyen Dong',
    email: 'ngthiendong@gmail.com',
  };
  userNamePromise = Promise.resolve({
    name: 'Nguyen Dong',
    email: 'ngthiendong@gmail.com',
  })
}
