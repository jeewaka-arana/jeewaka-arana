import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDoctorComponent } from './sign-doctor.component';

describe('SignDoctorComponent', () => {
  let component: SignDoctorComponent;
  let fixture: ComponentFixture<SignDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
