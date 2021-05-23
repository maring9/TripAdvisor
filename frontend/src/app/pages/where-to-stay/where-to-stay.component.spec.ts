import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToStayComponent } from './where-to-stay.component';

describe('WhereToStayComponent', () => {
  let component: WhereToStayComponent;
  let fixture: ComponentFixture<WhereToStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereToStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
