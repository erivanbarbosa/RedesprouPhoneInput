import { TestBed } from '@angular/core/testing';

import { RedesprouTelephoneInputService } from './redesprou-telephone-input.service';

describe('RedesprouTelephoneInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedesprouTelephoneInputService = TestBed.get(RedesprouTelephoneInputService);
    expect(service).toBeTruthy();
  });
});
