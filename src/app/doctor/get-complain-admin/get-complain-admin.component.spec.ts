import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplainAdminComponent } from './get-complain-admin.component';

describe('GetComplainAdminComponent', () => {
  let component: GetComplainAdminComponent;
  let fixture: ComponentFixture<GetComplainAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetComplainAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplainAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
