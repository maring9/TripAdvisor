import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {fromEvent} from 'rxjs';
import {filter} from 'rxjs/operators';

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

  public showMenu = false;

  constructor(public auth: AuthService, private eleRef: ElementRef) {
  }

  ngOnInit(): void {
    const user = this.auth.userData;
    if (user) {
      this.initials = user.firstName?.charAt(0) + user.lastName?.charAt(0);
      if (!this.initials) {
        this.initials = (user as any).name?.charAt(0);
      }
      // @ts-ignore
      this.initials = this.initials?.toUpperCase();
    }
    fromEvent(document, 'click')
      .pipe(
        filter(({target}) => this.showMenu && !this.eleRef.nativeElement.contains(target))
      )
      .subscribe(event => {
        this.showMenu = false;
      });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
