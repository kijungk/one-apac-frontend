import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrator } from '../../classes/administrator/administrator';
import { Users } from '../../classes/users/users';
import { View } from '../../classes/view/view';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { StatisticsService } from '../../services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  private administrator: Administrator;
  private users: Observable<Users>;
  private views: Observable<View[]>;

  constructor(
    private administratorService: AdministratorService,
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;

    this.users = this.statisticsService.getUsers(this.administrator.eventId);
    this.views = this.statisticsService.getViews(this.administrator.eventId);
    return;
  }

}
