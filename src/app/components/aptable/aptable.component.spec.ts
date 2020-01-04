import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptableComponent } from './aptable.component';

describe('AptableComponent', () => {
  let component: AptableComponent;
  let fixture: ComponentFixture<AptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
