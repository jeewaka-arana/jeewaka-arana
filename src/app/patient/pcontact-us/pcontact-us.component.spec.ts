import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontactUsComponent } from './pcontact-us.component';

describe('PcontactUsComponent', () => {
  let component: PcontactUsComponent;
  let fixture: ComponentFixture<PcontactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcontactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcontactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
