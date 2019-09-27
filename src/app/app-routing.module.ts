import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BroadcastComponent } from './pages/broadcast/broadcast.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'broadcast', component: BroadcastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
