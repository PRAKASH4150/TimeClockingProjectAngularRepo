import { TestBed } from '@angular/core/testing';

import { ViewByDatesService } from './view-by-dates.service';

describe('ViewByDatesService', () => {
  let service: ViewByDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewByDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
