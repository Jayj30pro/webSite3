import { TestBed } from '@angular/core/testing';

import { SkillsModelService } from './skills.model.service';

describe('SkillsModelService', () => {
  let service: SkillsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
