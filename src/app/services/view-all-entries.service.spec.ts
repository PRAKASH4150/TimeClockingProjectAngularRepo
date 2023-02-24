import { TestBed } from '@angular/core/testing';

import { ViewAllEntriesService } from './view-all-entries.service';

describe('ViewAllEntriesService', () => {
  let service: ViewAllEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
