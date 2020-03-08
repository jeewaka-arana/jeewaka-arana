import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivingComponent } from './retriving.component';

describe('RetrivingComponent', () => {
  let component: RetrivingComponent;
  let fixture: ComponentFixture<RetrivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
