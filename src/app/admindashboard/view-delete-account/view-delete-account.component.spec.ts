import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteAccountComponent } from './view-delete-account.component';

describe('ViewDeleteAccountComponent', () => {
  let component: ViewDeleteAccountComponent;
  let fixture: ComponentFixture<ViewDeleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeleteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
