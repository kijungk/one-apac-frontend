import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broadcast } from '../../classes/broadcast/broadcast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  constructor(
    private http: HttpClient
  ) { }

  public getBroadcasts(eventId: number): Observable<Broadcast[]> {
    return this.http.get<Broadcast[]>('/api/broadcasts' + `?eventId=${eventId}`)
      .pipe(map(data => data));
  }

  public sendBroadcast(message: string, eventId: number): Observable<any> {
    return this.http.post<Broadcast>('/api/broadcasts', { text: message, eventId })
      .pipe(map(data => data));
  }
}
