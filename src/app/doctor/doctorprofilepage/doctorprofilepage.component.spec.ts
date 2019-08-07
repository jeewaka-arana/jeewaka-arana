import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprofilepageComponent } from './doctorprofilepage.component';

describe('DoctorprofilepageComponent', () => {
  let component: DoctorprofilepageComponent;
  let fixture: ComponentFixture<DoctorprofilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprofilepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
