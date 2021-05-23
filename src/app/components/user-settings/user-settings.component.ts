import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

interface IPicture {
  is_silhouette: boolean;
  url: string;
  height: number;
  width: number;
}

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  @Input() public picture: IPicture | undefined;

  public initials: string | undefined;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.getUserData().subscribe(user => {
      if (user) {
        this.initials = user.firstName.charAt(0) + user.lastName.charAt(0);
        this.initials.toUpperCase();
      }
    });
  }
}
