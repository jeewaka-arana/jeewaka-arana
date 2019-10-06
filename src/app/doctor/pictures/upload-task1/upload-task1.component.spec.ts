import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTask1Component } from './upload-task1.component';

describe('UploadTask1Component', () => {
  let component: UploadTask1Component;
  let fixture: ComponentFixture<UploadTask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
