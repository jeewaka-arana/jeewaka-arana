import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorchartComponent } from './doctorchart.component';

describe('DoctorchartComponent', () => {
  let component: DoctorchartComponent;
  let fixture: ComponentFixture<DoctorchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
