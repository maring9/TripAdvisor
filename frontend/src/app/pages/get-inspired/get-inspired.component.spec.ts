import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInspiredComponent } from './get-inspired.component';

describe('GetInspiredComponent', () => {
  let component: GetInspiredComponent;
  let fixture: ComponentFixture<GetInspiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInspiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInspiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
