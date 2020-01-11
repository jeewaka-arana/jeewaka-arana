import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlinechartComponent } from './dlinechart.component';

describe('DlinechartComponent', () => {
  let component: DlinechartComponent;
  let fixture: ComponentFixture<DlinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
