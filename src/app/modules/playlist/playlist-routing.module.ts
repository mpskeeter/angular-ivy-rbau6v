import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: PlayListComponent,
  },
  {
    path: ':id',
    component: PlayListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistRoutingModule {}
