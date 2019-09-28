import { transition, trigger, style, animate, state } from '@angular/animations';

export const navigationHoverAnimation =
  trigger('navigationHoverAnimation', [
    state('active', style({
      transform: 'scale(1.2)',
      textShadow: '0 0 4px rgb(255, 255, 255)'
    })),
    transition('inactive => active', animate('100ms ease-in-out')),
    transition('active => inactive', animate('100ms ease-in-out')),
  ]);
