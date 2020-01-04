import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasetestComponent } from './firebasetest.component';

describe('FirebasetestComponent', () => {
  let component: FirebasetestComponent;
  let fixture: ComponentFixture<FirebasetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
