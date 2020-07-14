import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2cComponent } from './blog2c.component';

describe('Blog2cComponent', () => {
  let component: Blog2cComponent;
  let fixture: ComponentFixture<Blog2cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog2cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
