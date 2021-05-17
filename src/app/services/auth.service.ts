import {Injectable} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {BehaviorSubject, merge, Observable, Subject} from 'rxjs';
import {RegisterUser} from '../models/register-user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginUser} from '../models/login-user';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject(false);
  public isAuth$ = this.isAuthSubject.asObservable();

  private userDataSubject = new Subject<SocialUser>();
  private userData$ = this.userDataSubject.asObservable();

  constructor(private authService: SocialAuthService,
              private http: HttpClient,
              private router: Router) {
    this.getUserData().subscribe(t => {
      this.isAuthSubject.next(!!t);
      console.log(t);
      console.log('init');
    });

    this.isAuth$.subscribe(async isAuth => {
      console.log('update:', isAuth);
      if (isAuth) {
        await router.navigate(['/']);
      } else {
        await router.navigate(['/auth/login']);
      }
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
    return merge(this.authService.authState, this.userData$);
  }

  public register(user: RegisterUser): Observable<any> {
    console.log(user);
    const url = `${environment.apiUrl}auth/signup`;
    return this.http.post(url, user, {responseType: 'text'});
  }

  public login(user: LoginUser): Observable<any> {
    const url = `${environment.apiUrl}auth/signin`;
    return this.http.post(url, user).pipe(tap((r: any) => {
      const socialUser = new SocialUser();
      socialUser.authToken = r.accessToken;
      socialUser.name = r.username;
      this.userDataSubject.next(socialUser);
    }));
  }
}
