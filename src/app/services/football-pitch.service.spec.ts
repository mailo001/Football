import { TestBed } from '@angular/core/testing';

import { FootballPitchService } from './football-pitch.service';

describe('FootballPitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballPitchService = TestBed.get(FootballPitchService);
    expect(service).toBeTruthy();
  });
});
