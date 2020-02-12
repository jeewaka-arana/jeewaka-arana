import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientbarchartComponent } from './patientbarchart.component';

describe('PatientbarchartComponent', () => {
  let component: PatientbarchartComponent;
  let fixture: ComponentFixture<PatientbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
