import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { View } from '../../classes/view/view';
import { Vote } from '../../classes/vote/vote';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) { }

  public getViews(eventId: number): Observable<View[]> {
    return this.http.get<View[]>('/api/views' + `?eventId=${eventId}`)
      .pipe(map(data => data));
  }

  public getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>('/api/votes')
      .pipe(map(data => data));
  }
}
