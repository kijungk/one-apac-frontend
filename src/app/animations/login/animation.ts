import { transition, trigger, style, state, animate } from '@angular/animations';

export const loginAnimation =
  trigger('loginAnimation', [
    state('notLoggedIn', style({
      opacity: '0',
      color: 'rgba(0, 0, 0, 0)'
    })),
    state('loggedIn', style({
      opacity: '1',
      color: 'black'
    })),
    transition('notLoggedIn <=> loggedIn', animate('1000ms ease-in-out'))
  ]);
