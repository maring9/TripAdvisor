import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {PlacesComponent} from './pages/places/places.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {WhereToStayComponent} from './pages/where-to-stay/where-to-stay.component';
import {WhereToEatComponent} from './pages/where-to-eat/where-to-eat.component';
import {GetInspiredComponent} from './pages/get-inspired/get-inspired.component';
import {PageLayoutComponent} from './components/page-layout/page-layout.component';
import {SearchComponent} from './pages/search/search.component';
import {LoginComponent} from './pages/login/login.component';
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaterialRatingModule} from 'ngx-material-rating';
import {LocationCardComponent} from './components/location-card/location-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {MatIconModule} from '@angular/material/icon';
import {FacebookButtonComponent} from './components/facebook-button/facebook-button.component';
import {GoogleLoginButtonComponent} from './components/google-login-button/google-login-button.component';
import {environment} from 'src/environments/environment';
import {LoginContainerComponent} from './components/login-container/login-container.component';
import {RegisterComponent} from './pages/register/register.component';
import {RegisterContainerComponent} from './components/register-container/register-container.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {WithAuthPipe} from './pipes/with-auth.pipe';
import {WhereToEatCardsComponent} from './components/where-to-eat-cards/where-to-eat-cards.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


export const socialLoginProvider: Provider = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      // {
      //   id: GoogleLoginProvider.PROVIDER_ID,
      //   provider: new GoogleLoginProvider(
      //     'clientId'
      //   )
      // },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(environment.facebookClientId)
      }
    ]
  } as SocialAuthServiceConfig,
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesComponent,
    NavigationComponent,
    WhereToStayComponent,
    WhereToEatComponent,
    GetInspiredComponent,
    PageLayoutComponent,
    SearchComponent,
    LoginComponent,
    UserSettingsComponent,
    LocationCardComponent,
    RegisterFormComponent,
    FacebookButtonComponent,
    GoogleLoginButtonComponent,
    LoginContainerComponent,
    RegisterComponent,
    RegisterContainerComponent,
    WithAuthPipe,
    WhereToEatCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxMaterialRatingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    socialLoginProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}