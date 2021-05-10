import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToEatComponent } from './where-to-eat.component';

describe('WhereToEatComponent', () => {
  let component: WhereToEatComponent;
  let fixture: ComponentFixture<WhereToEatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereToEatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
