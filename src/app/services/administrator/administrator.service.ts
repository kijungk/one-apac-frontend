import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Administrator } from '../../classes/administrator/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  administrator: Administrator = new Administrator();

  constructor(
    private http: HttpClient
  ) { }

  login(username, password): Observable<Administrator> {
    const body = {
      username,
      password
    };

    return this.http.post<Administrator>('/api/administrators/login', body)
      .pipe(map(data => data));
  }
}
