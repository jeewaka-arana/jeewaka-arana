import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorfordComponent } from './doctorford.component';

describe('DoctorfordComponent', () => {
  let component: DoctorfordComponent;
  let fixture: ComponentFixture<DoctorfordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorfordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
