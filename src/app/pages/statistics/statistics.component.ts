import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrator } from '../../classes/administrator/administrator';
import { View } from '../../classes/view/view';
import { Vote } from '../../classes/vote/vote';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { StatisticsService } from '../../services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  administrator: Administrator;
  views: Observable<View[]>;
  votes: Observable<Vote[]>;

  constructor(
    private administratorService: AdministratorService,
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;

    this.views = this.statisticsService.getViews(this.administrator.eventId);
  }

}
