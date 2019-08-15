import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPatientComponent } from './sign-patient.component';

describe('SignPatientComponent', () => {
  let component: SignPatientComponent;
  let fixture: ComponentFixture<SignPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
