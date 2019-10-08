import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarreviewComponent } from './starreview.component';

describe('StarreviewComponent', () => {
  let component: StarreviewComponent;
  let fixture: ComponentFixture<StarreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
