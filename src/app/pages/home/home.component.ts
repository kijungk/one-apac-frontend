import { Component, OnInit } from '@angular/core';
import { Administrator } from '../../classes/administrator/administrator';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { loginAnimation } from '../../animations/login/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [loginAnimation]
})
export class HomeComponent implements OnInit {
  private administrator: Administrator;

  constructor(
    private administratorService: AdministratorService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;
  }

  private logout(): void {
    return this.administratorService.logout();
  }
}
