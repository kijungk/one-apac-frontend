import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { flatMap, map, startWith } from 'rxjs/operators';
import { Vote } from '../../classes/vote/vote';
import { VoteStatus } from '../../classes/vote-status/vote-status';

@Injectable({
  providedIn: 'root'
})
export class LipSyncBattleService {
  constructor(
    private http: HttpClient
  ) { }

  public getVotes(): Observable<Vote[]> {
    return interval(5000)
      .pipe(startWith(0))
      .pipe(flatMap(() => {
        return this.http.get<Vote[]>('/api/votes');
      }));
  }

  public getVoteStatus(): Observable<VoteStatus> {
    return this.http.get<VoteStatus>('/api/votes/status')
      .pipe(map(data => data));
  }

  public setVoteStatus(voteStatus: VoteStatus): Observable<object> {
    return this.http.put<VoteStatus>('/api/votes/status', voteStatus)
      .pipe(map(data => data));
  }
}
