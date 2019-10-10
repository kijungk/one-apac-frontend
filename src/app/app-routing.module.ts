import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BroadcastComponent } from './pages/broadcast/broadcast.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard],
    data: { animation: 'Statistics' }
  },
  {
    path: 'broadcast',
    component: BroadcastComponent,
    canActivate: [AuthGuard],
    data: { animation: 'Broadcast' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
