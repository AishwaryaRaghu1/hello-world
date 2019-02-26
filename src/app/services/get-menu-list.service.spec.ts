import { TestBed, inject } from '@angular/core/testing';

import { GetMenuListService } from './get-menu-list.service';

describe('GetMenuListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMenuListService]
    });
  });

  it('should be created', inject([GetMenuListService], (service: GetMenuListService) => {
    expect(service).toBeTruthy();
  }));
});
