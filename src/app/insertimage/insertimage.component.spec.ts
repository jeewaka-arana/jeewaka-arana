import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertimageComponent } from './insertimage.component';

describe('InsertimageComponent', () => {
  let component: InsertimageComponent;
  let fixture: ComponentFixture<InsertimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
