import { TestBed, inject } from '@angular/core/testing';

import { SearchRequestsService } from './search-requests.service';

describe('SearchRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRequestsService]
    });
  });

  it('should be created', inject([SearchRequestsService], (service: SearchRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
