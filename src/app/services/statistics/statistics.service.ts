import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { flatMap, startWith } from 'rxjs/operators';
import { View } from '../../classes/view/view';
import { Users } from '../../classes/users/users';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(eventId: number): Observable<Users> {
    return interval(5000)
      .pipe(startWith(0))
      .pipe(flatMap(() => {
        return this.http.get<Users>(`/api/users?eventId=${eventId}`);
      }));
  }

  public getViews(eventId: number): Observable<View[]> {
    return interval(5000)
      .pipe(startWith(0))
      .pipe(flatMap(() => {
        return this.http.get<View[]>(`/api/views?eventId=${eventId}`)
      }));
  }
}
