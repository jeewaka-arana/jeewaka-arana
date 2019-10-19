import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeremapComponent } from './heremap.component';

describe('HeremapComponent', () => {
  let component: HeremapComponent;
  let fixture: ComponentFixture<HeremapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeremapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeremapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
