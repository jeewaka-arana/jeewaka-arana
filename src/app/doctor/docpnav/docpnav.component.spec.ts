import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpnavComponent } from './docpnav.component';

describe('DocpnavComponent', () => {
  let component: DocpnavComponent;
  let fixture: ComponentFixture<DocpnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocpnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
