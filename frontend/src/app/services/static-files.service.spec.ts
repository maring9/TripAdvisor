import { TestBed } from '@angular/core/testing';

import { StaticFilesService } from './static-files.service';

describe('StaticFilesService', () => {
  let service: StaticFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
