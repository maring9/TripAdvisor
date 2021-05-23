import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LoginUser} from '../../models/login-user';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {


  public loginCredentials = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  submit(user: LoginUser): void {
    this.auth.login(user).subscribe(r => {
      console.log(r);
    });
  }
}
