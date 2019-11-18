import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaboutUsComponent } from './pabout-us.component';

describe('PaboutUsComponent', () => {
  let component: PaboutUsComponent;
  let fixture: ComponentFixture<PaboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
