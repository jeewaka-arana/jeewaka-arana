import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocacceptComponent } from './docaccept.component';

describe('DocacceptComponent', () => {
  let component: DocacceptComponent;
  let fixture: ComponentFixture<DocacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
