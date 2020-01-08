import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbarchartComponent } from './dbarchart.component';

describe('DbarchartComponent', () => {
  let component: DbarchartComponent;
  let fixture: ComponentFixture<DbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
