import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {RegisterContainerComponent} from './register-container.component';
import {socialLoginProvider} from '../../app.module';
import {SocialLoginModule} from 'angularx-social-login';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Observable, of} from 'rxjs';

describe('RegisterContainerComponent', () => {
  let component: RegisterContainerComponent;
  let fixture: ComponentFixture<RegisterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterContainerComponent],
      providers: [
        socialLoginProvider
      ],
      imports: [
        SocialLoginModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the username field', fakeAsync(() => {
    const httpCommonService = fixture.debugElement.injector.get(HttpClient);
    const httpCommonResponse = {
      isValid: true
    };
    const spyService = spyOn(httpCommonService, 'post').and.callFake((): Observable<any> => {
      return of(httpCommonResponse);
    });
    const submit = spyOn(component, 'submit');

    const inputUsername = fixture.nativeElement.querySelector('input[name="username"]');
    const inputEmail = fixture.nativeElement.querySelector('input[name="email"]');
    const inputPassword = fixture.nativeElement.querySelector('input[name="password"]');

    inputUsername.value = 'Daniel';
    inputUsername.dispatchEvent(new Event('input'));

    inputEmail.value = 'daniel@gmail.com';
    inputEmail.dispatchEvent(new Event('input'));

    inputPassword.value = 'daniel';
    inputPassword.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector('button');
    submitButton.click();
    // console.log(component.user);

    expect(submit).toHaveBeenCalledTimes(1);
  }));

  it('title should be displayed', () => {
    const title = fixture.nativeElement.querySelector('h3[class="title"]');
    expect(title.innerHTML).toEqual('Sign up with Email');
  });

});
