import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {RegisterContainerComponent} from './register-container.component';
import {socialLoginProvider} from '../../app.module';
import {SocialLoginModule} from 'angularx-social-login';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the username field', fakeAsync(() => {
    const username = fixture.nativeElement.querySelector('input[name="username"]');

    username.value = 'Red';
    username.dispatchEvent(event);
    fixture.detectChanges();
    // expect(component.favoriteColor).toEqual('Red');
  }));
});
