import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteditComponent } from './notedit.component';

describe('NoteditComponent', () => {
  let component: NoteditComponent;
  let fixture: ComponentFixture<NoteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
