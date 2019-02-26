import { TestBed, inject } from '@angular/core/testing';

import { CaterersListService } from './caterers-list.service';

describe('CaterersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaterersListService]
    });
  });

  it('should be created', inject([CaterersListService], (service: CaterersListService) => {
    expect(service).toBeTruthy();
  }));
});
