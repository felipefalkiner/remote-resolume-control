import { TestBed } from '@angular/core/testing';

import { ResolumeService } from './resolume.service';

describe('ResolumeService', () => {
  let service: ResolumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
