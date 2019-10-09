import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Administrator } from '../../classes/administrator/administrator';
import { AdministratorService } from '../../services/administrator/administrator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: object = {
    username: '',
    password: ''
  };

  loginSubscription: Subscription;

  constructor(
    private administratorService: AdministratorService
  ) { }

  ngOnInit() {
  }

  private login(): void {
    this.loginSubscription = this.administratorService.login(this.form['username'], this.form['password'])
      .subscribe(
        (response) => {
          console.log('response: ', response);
        },
        (error) => {
          alert(error.error);
        }
      );
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
