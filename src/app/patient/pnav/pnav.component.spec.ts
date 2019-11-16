import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnavComponent } from './pnav.component';

describe('PnavComponent', () => {
  let component: PnavComponent;
  let fixture: ComponentFixture<PnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

