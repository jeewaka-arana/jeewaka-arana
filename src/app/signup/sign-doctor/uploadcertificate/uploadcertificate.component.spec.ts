import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcertificateComponent } from './uploadcertificate.component';

describe('UploadcertificateComponent', () => {
  let component: UploadcertificateComponent;
  let fixture: ComponentFixture<UploadcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
