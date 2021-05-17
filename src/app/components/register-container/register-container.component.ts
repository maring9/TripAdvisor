import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {RegisterUser} from '../../models/register-user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(user: RegisterUser): void {
    this.auth.register(user).subscribe(async response => {
      await this.router.navigate(['/', 'auth', 'login']);
    });
  }
}
