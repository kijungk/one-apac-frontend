import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Vote } from '../../classes/vote/vote';
import { VoteStatus } from '../../classes/vote-status/vote-status';
import { LipSyncBattleService } from '../../services/lip-sync-battle/lip-sync-battle.service';

@Component({
  selector: 'app-lip-sync-battle',
  templateUrl: './lip-sync-battle.component.html',
  styleUrls: ['./lip-sync-battle.component.scss']
})
export class LipSyncBattleComponent implements OnInit, OnDestroy {
  private votes: Observable<Vote[]>;
  private voteStatus: VoteStatus;
  private voteStatusSubscription: Subscription;

  constructor(
    private lipSyncBattleService: LipSyncBattleService
  ) { }

  ngOnInit() {
    this.votes = this.lipSyncBattleService.getVotes();

    this.voteStatusSubscription = this.lipSyncBattleService.getVoteStatus()
      .subscribe(
        (response: VoteStatus): void => {
          this.voteStatus = response;
          return;
        },
        (error): void => {
          return alert(error.error);
        },
        (): void => {
          console.log(`Vote Status successfully retrieved. The status is ${this.voteStatus ? 'Active' : 'Locked'}`);
          return;
        }
      );
  }

  private setVoteStatus(): void {
    if (!confirm(`Are you sure you want to set the voting feature to ${this.voteStatus.isActive ? 'Active' : 'Locked'}?`)) {
      return;
    }

    this.lipSyncBattleService.setVoteStatus(this.voteStatus)
      .subscribe(
        (response: object): void => {
          if (response['success']) {
            console.log('Voting status successfully set')
          }

          return;
        },
        (error): void => {
          return alert(error.error);
        },
        (): void => {
          console.log('Voting status setting complete');
          return;
        }
      );
  }

  ngOnDestroy() {
    if (this.voteStatusSubscription) {
      this.voteStatusSubscription.unsubscribe();
    }
  }
}
