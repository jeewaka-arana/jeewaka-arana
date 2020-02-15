import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleaccountsComponent } from './handleaccounts.component';

describe('HandleaccountsComponent', () => {
  let component: HandleaccountsComponent;
  let fixture: ComponentFixture<HandleaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
