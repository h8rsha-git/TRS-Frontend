import { TestBed } from '@angular/core/testing';

import { FeedbackService } from './feedback.service';

describe('FeedbackServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service).toBeTruthy();
  });
});
