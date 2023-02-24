import { TestBed } from '@angular/core/testing';

import { AddEntryeService } from './add-entrye.service';

describe('AddEntryeService', () => {
  let service: AddEntryeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEntryeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
