import { transition, trigger, style, state, animate } from '@angular/animations';

export const loginAnimation =
  trigger('loginAnimation', [
    state('hide', style({
      opacity: '0',
      color: 'rgba(0, 0, 0, 0)'
    })),
    state('show', style({
      opacity: '1',
      color: 'black'
    })),
    transition('hide => show', animate('1000ms ease-in-out'))
  ]);
