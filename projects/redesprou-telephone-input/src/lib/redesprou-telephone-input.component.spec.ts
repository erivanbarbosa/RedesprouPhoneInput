import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesprouTelephoneInputComponent } from './redesprou-telephone-input.component';

describe('RedesprouTelephoneInputComponent', () => {
  let component: RedesprouTelephoneInputComponent;
  let fixture: ComponentFixture<RedesprouTelephoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesprouTelephoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesprouTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
