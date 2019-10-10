import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdministratorService } from '../../services/administrator/administrator.service';
import { Administrator } from '../../classes/administrator/administrator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private form: object = {
    username: '',
    password: ''
  };

  private loginSubscription: Subscription;

  constructor(
    private administratorService: AdministratorService
  ) { }

  ngOnInit() {
  }

  private login(): void {
    this.loginSubscription = this.administratorService.login(this.form['username'], this.form['password'])
      .subscribe(
        (response: Administrator): void => {
          return this.administratorService.setAdministrator(response);
        },
        (error): void => {
          return alert(error.error);
        },
        (): void => {
          console.log(`Login complete! Welcome ${this.administratorService.administrator.username}.`);
          return;
        }
      );
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
