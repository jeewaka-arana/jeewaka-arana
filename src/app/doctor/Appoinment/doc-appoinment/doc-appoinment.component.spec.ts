import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppoinmentComponent } from './doc-appoinment.component';

describe('DocAppoinmentComponent', () => {
  let component: DocAppoinmentComponent;
  let fixture: ComponentFixture<DocAppoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocAppoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
