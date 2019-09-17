import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Up1Component } from './up1.component';

describe('Up1Component', () => {
  let component: Up1Component;
  let fixture: ComponentFixture<Up1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Up1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Up1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
