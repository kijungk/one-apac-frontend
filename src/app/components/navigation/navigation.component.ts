import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../classes/navigation/navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigations: Array<Navigation> = new Array();
  routerLinkActiveOptions: object;

  constructor() { }

  ngOnInit() {
    const navigations = [
      new Navigation('Home', 'fas fa-home', '/'),
      new Navigation('Statistics', 'fas fa-chart-bar', '/statistics'),
      new Navigation('Broadcast', 'fas fa-bullhorn', '/broadcast')
    ];
    this.navigations = navigations;

    this.routerLinkActiveOptions = {
      exact: true
    };

    return;
  }
}
