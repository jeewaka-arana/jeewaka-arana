import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConfirmComponent } from './doctor-confirm.component';

describe('DoctorConfirmComponent', () => {
  let component: DoctorConfirmComponent;
  let fixture: ComponentFixture<DoctorConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
