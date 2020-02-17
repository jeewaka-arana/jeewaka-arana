import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommentPartComponent } from './view-comment-part.component';

describe('ViewCommentPartComponent', () => {
  let component: ViewCommentPartComponent;
  let fixture: ComponentFixture<ViewCommentPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommentPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommentPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
