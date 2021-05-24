import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToEatCardsComponent } from './where-to-eat-cards.component';

describe('WhereToEatCardsComponent', () => {
  let component: WhereToEatCardsComponent;
  let fixture: ComponentFixture<WhereToEatCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereToEatCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToEatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
