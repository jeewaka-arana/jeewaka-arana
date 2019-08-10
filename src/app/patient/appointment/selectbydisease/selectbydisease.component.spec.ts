import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbydiseaseComponent } from './selectbydisease.component';

describe('SelectbydiseaseComponent', () => {
  let component: SelectbydiseaseComponent;
  let fixture: ComponentFixture<SelectbydiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbydiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbydiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
