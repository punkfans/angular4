import { TestBed, inject } from '@angular/core/testing';

import { RedditDataServiceService } from './reddit-data-service.service';

describe('RedditDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditDataServiceService]
    });
  });

  it('should ...', inject([RedditDataServiceService], (service: RedditDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
