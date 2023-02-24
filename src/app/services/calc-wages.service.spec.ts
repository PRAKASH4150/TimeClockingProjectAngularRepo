import { TestBed } from '@angular/core/testing';

import { CalcWagesService } from './calc-wages.service';

describe('CalcWagesService', () => {
  let service: CalcWagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcWagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
