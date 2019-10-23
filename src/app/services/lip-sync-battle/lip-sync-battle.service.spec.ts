import { TestBed } from '@angular/core/testing';

import { LipSyncBattleService } from './lip-sync-battle.service';

describe('LipSyncBattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LipSyncBattleService = TestBed.get(LipSyncBattleService);
    expect(service).toBeTruthy();
  });
});
