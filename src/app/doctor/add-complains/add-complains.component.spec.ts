import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplainsComponent } from './add-complains.component';

describe('AddComplainsComponent', () => {
  let component: AddComplainsComponent;
  let fixture: ComponentFixture<AddComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
