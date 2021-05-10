import {Injectable} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject(false);
  public isAuth$ = this.isAuthSubject.asObservable();

  constructor(private authService: SocialAuthService) {
    this.getUserData().subscribe(t => {
      this.isAuthSubject.next(!!t);
      console.log(t);
      console.log('inti');
    });
  }

  public async signInWithGoogle(): Promise<void> {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public async signInWithFB(): Promise<void> {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public async signOut(): Promise<void> {
    await this.authService.signOut();
  }

  public async refreshToken(): Promise<void> {
    await this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  public getUserData(): Observable<SocialUser> {
    return this.authService.authState;
  }
}
