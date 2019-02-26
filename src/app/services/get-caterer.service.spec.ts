import { TestBed, inject } from '@angular/core/testing';

import { GetCatererService } from './get-caterer.service';

describe('GetCatererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCatererService]
    });
  });

  it('should be created', inject([GetCatererService], (service: GetCatererService) => {
    expect(service).toBeTruthy();
  }));
});
