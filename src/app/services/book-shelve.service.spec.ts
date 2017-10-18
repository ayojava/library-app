import { TestBed, inject } from '@angular/core/testing';

import { BookShelveService } from './book-shelve.service';

describe('BookShelveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookShelveService]
    });
  });

  it('should ...', inject([BookShelveService], (service: BookShelveService) => {
    expect(service).toBeTruthy();
  }));
});
