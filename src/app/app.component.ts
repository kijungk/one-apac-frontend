import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimation } from './animations/route-transition/animation';
import { Administrator } from './classes/administrator/administrator';
import { AdministratorService } from './services/administrator/administrator.service';
import { loginAnimation } from './animations/login/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimation, loginAnimation]
})
export class AppComponent implements OnInit {
  private administrator: Administrator;

  constructor(
    private administratorService: AdministratorService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;
  }

  private prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
