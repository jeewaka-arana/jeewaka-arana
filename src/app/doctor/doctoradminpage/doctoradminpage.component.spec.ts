import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradminpageComponent } from './doctoradminpage.component';

describe('DoctoradminpageComponent', () => {
  let component: DoctoradminpageComponent;
  let fixture: ComponentFixture<DoctoradminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoradminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
