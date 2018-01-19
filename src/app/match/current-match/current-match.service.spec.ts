import { TestBed, inject } from '@angular/core/testing';

import { CurrentMatchService } from './current-match.service';

describe('CurrentMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentMatchService]
    });
  });

  it('should be created', inject([CurrentMatchService], (service: CurrentMatchService) => {
    expect(service).toBeTruthy();
  }));
});
