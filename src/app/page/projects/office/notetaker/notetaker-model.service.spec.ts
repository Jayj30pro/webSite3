import { TestBed } from '@angular/core/testing';

import { NotetakerModelService } from './notetaker-model.service';

describe('NotetakerModelService', () => {
  let service: NotetakerModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotetakerModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
