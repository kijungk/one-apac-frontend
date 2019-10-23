import { Injectable } from '@angular/core';
import { Navigation } from '../../classes/navigation/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navigations: Array<Navigation> = new Array();

  constructor() { }

  public addLipSyncBattleNavigation(username: string): void {
    this.resetNavigation();

    if (this.isOneApac(username)) {
      this.navigations.splice(1, 0, new Navigation('Lip Sync Battle', 'fas fa-microphone-alt', '/lip-sync-battle'));
    }

    return;
  }

  private resetNavigation(): void {
    this.navigations.length = 0;

    this.navigations.push(new Navigation('Home', 'fas fa-home', '/'));
    this.navigations.push(new Navigation('Statistics', 'fas fa-chart-bar', '/statistics'));
    this.navigations.push(new Navigation('Broadcast', 'fas fa-bullhorn', '/broadcast'));

    return;
  }

  private isOneApac(username: string): boolean {
    if (username === 'oneapac') {
      return true;
    }

    return false;
  }
}
