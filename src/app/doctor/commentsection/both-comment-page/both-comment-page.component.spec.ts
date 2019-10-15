import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BothCommentPageComponent } from './both-comment-page.component';

describe('BothCommentPageComponent', () => {
  let component: BothCommentPageComponent;
  let fixture: ComponentFixture<BothCommentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BothCommentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BothCommentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
