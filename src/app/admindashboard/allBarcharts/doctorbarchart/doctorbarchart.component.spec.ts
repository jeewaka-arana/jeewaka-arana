import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorbarchartComponent } from './doctorbarchart.component';

describe('DoctorbarchartComponent', () => {
  let component: DoctorbarchartComponent;
  let fixture: ComponentFixture<DoctorbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
