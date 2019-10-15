import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuttonComponent } from './viewbutton.component';

describe('ViewbuttonComponent', () => {
  let component: ViewbuttonComponent;
  let fixture: ComponentFixture<ViewbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
