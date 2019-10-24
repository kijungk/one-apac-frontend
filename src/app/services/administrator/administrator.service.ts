import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Administrator } from '../../classes/administrator/administrator';
import { NavigationService } from '../navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  public administrator: Administrator = new Administrator();

  constructor(
    private http: HttpClient,
    private navigationService: NavigationService
  ) { }

  public login(username, password): Observable<Administrator> {
    const body = {
      username,
      password
    };

    return this.http.post<Administrator>('/api/administrators/login', body)
      .pipe(map(data => data));
  }

  public setAdministrator(administrator: Administrator): void {
    this.administrator.id = administrator.id;
    this.administrator.username = administrator.username;
    this.administrator.eventId = administrator.eventId;

    this.navigationService.addLipSyncBattleNavigation(this.administrator.username);

    return;
  }

  public logout(): void {
    this.administrator.id = null;
    this.administrator.username = null;
    this.administrator.eventId = null;
    return;
  }
}
