import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SignInService from './sign-in.service';

@Component({
  selector: 'app-sign-in',

  template: `
    <form (ngSubmit)="handleSubmit(formSignIn)" #formSignIn="ngForm">
      <input
        placeholder="Nhập email"
        ngModel
        #txtEmail="ngModel"
        name="email"
        required
        email
      />
      <p *ngIf="txtEmail.touched && txtEmail.errors?.['required']">
        Email is required
      </p>
      <p *ngIf="txtEmail.touched && txtEmail.errors?.['email']">
        Email is invalid
      </p>
      <br /><br />
      <input
        placeholder="Password"
        ngModel
        name="password"
        minlength="6"
        required
        pattern="[a-z]*"
      />
      <br /><br />
      <div ngModelGroup="subjects">
        <label><input type="checkbox" ngModel name="nodejs" />NodeJs</label>
        <br /><br />
        <label><input type="checkbox" ngModel name="php" />PHP</label>
        <br /><br />
        <label><input type="checkbox" ngModel name="angular" />Angular</label>
      </div>
      <br /><br />

      <button [disabled]="formSignIn.form.invalid">Submit</button>
    </form>
    <p>{{ formSignIn.value | json }}</p>
  `,
  providers: [SignInService],
})
export default class SignInComponent {
  constructor(private signInService: SignInService) {}
  handleSubmit(formValue: NgForm) {
    this.signInService
      .sendPost(formValue.value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
