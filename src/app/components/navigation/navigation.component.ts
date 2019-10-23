import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../classes/navigation/navigation';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Administrator } from '../../classes/administrator/administrator';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigations: Array<Navigation>;
  routerLinkActiveOptions: object;

  administrator: Administrator;

  constructor(
    private administratorService: AdministratorService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;
    this.navigations = this.navigationService.navigations;

    this.routerLinkActiveOptions = {
      exact: true
    };

    return;
  }
}
