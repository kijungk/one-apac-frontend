import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BroadcastComponent } from './pages/broadcast/broadcast.component';


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
    data: { animation: 'Statistics' }
  },
  {
    path: 'broadcast',
    component: BroadcastComponent,
    data: { animation: 'Broadcast' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
