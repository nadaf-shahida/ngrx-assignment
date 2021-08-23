import { TestBed } from '@angular/core/testing';

import { PaginationpageService } from './paginationpage.service';

describe('PaginationpageService', () => {
  let service: PaginationpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
