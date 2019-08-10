import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbynameComponent } from './selectbyname.component';

describe('SelectbynameComponent', () => {
  let component: SelectbynameComponent;
  let fixture: ComponentFixture<SelectbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
