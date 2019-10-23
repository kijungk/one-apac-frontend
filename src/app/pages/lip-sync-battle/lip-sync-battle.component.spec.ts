import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipSyncBattleComponent } from './lip-sync-battle.component';

describe('LipSyncBattleComponent', () => {
  let component: LipSyncBattleComponent;
  let fixture: ComponentFixture<LipSyncBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipSyncBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipSyncBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
