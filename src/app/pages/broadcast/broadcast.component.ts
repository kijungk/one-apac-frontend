import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Broadcast } from '../../classes/broadcast/broadcast';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { BroadcastService } from '../../services/broadcast/broadcast.service';
import { Administrator } from '../../classes/administrator/administrator';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit, OnDestroy {
  private broadcasts: Observable<Broadcast[]>;
  private administrator: Administrator;

  private selectedBroadcast: Broadcast;
  private message: string;

  private broadcastSubscription: Subscription;

  constructor(
    private administratorService: AdministratorService,
    private broadcastService: BroadcastService
  ) { }

  ngOnInit() {
    this.administrator = this.administratorService.administrator;

    this.broadcasts = this.getBroadcastMessages(this.administrator.eventId);
  }

  private getBroadcastMessages(eventId: number): Observable<Broadcast[]> {
    return this.broadcastService.getBroadcasts(eventId);
  }

  private sendBroadcast(): void {
    if (!this.message) {
      return alert('Message cannot be blank!');
    }

    this.broadcastSubscription = this.broadcastService.sendBroadcast(this.message, this.administrator.eventId)
      .subscribe(
        (response): void => {
          if (response['success']) {
            this.message = '';
          }
          
          return;
        },
        (error): void => {
          return alert(error.message);
        },
        (): void => {
          console.log('Broadcast sent');
          
          return;
        }
      );
  }

  private setSelectedBroadcastAsMessage(): void {
    this.message = this.selectedBroadcast.message;
    return;
  }

  ngOnDestroy() {
    if (this.broadcastSubscription) {
      return this.broadcastSubscription.unsubscribe();
    }
  }

}
