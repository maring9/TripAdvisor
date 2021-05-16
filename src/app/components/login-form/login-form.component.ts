import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginCredentials = {
    email: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(e: any): void {
    console.log(e);
  }
}
